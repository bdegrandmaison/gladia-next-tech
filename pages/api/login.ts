import { NextApiResponse } from 'next';

import { PaymentStatus, ReqSession, User, UserWithoutPassword } from '../../interfaces';
import { redisGet } from '../../lib/redis';
import bcrypt from 'bcrypt';
import { LoginRequest } from '../../interfaces';
import { withSessionRoute } from '../../lib/session';

const handler = async (req: ReqSession, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const user = await authenticateUser(req.body);
    if (user) {
      req.session.user = user;
      await req.session.save();
      res.json(user);
    } else {
      res.status(401).json({ message: 'Invalid name or password' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

const authenticateUser = async ({
  username,
  password,
}: LoginRequest): Promise<UserWithoutPassword | null> => {
  const fetchedUser = await redisGet<User>(username);
  if (fetchedUser) {
    const isPasswordValid = await bcrypt.compare(password, fetchedUser?.password);
    const { id, name, email } = fetchedUser;
    if (isPasswordValid) {
      const { hasPaid } = await redisGet<PaymentStatus>(id);
      return {
        id,
        name,
        email,
        isLoggedIn: true,
        hasPaid: !!hasPaid,
      };
    }
  } else {
    return null;
  }
};

export default withSessionRoute(handler);
