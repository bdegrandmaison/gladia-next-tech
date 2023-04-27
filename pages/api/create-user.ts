import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import { CreateUserRequestBody } from '../../interfaces';
import { redisSet, redisGet } from '../../lib/redis';
import { v4 as uuidv4 } from 'uuid';

const createUser = async (
  req: NextApiRequest & { body: CreateUserRequestBody },
  res: NextApiResponse,
) => {
  const { username, password, email } = req.body;

  const usernameExists = await redisGet(username);
  if (usernameExists) {
    res.status(409).json({ message: 'Username or email already taken' });
    return;
  }

  bcrypt.hash(password, 10, async function (err, hash) {
    if (err) {
      res.status(500).json({ message: 'Error creating user' });
      return;
    }
    const userId = uuidv4();

    await redisSet(username, {
      id: userId,
      name: username,
      email,
      password: hash,
    });
    await redisSet(userId, { hasPaid: false });

    res.status(200).json({ message: 'User created' });
  });
};

export default createUser;
