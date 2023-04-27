import { NextApiResponse } from 'next';
import { ReqSession, User } from '../../interfaces';
import { redisGet } from '../../lib/redis';
import { withSessionRoute } from '../../lib/session';

const handler = async (req: ReqSession & { body: { username: string } }, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { username } = req.body;
    if (!username) {
      res.status(400).json({ message: 'Username is required' });
      return;
    }
    try {
      const usernameExists = await checkIfUsernameExists(username);
      if (usernameExists) {
        res.status(400).json({ message: 'Username already exists' });
      } else {
        res.status(200).json({ message: 'Username is available' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

const checkIfUsernameExists = async (username: string): Promise<boolean> => {
  try {
    const fetchedUser = await redisGet<User>(username);
    return !!fetchedUser;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to check if username exists');
  }
};

export default withSessionRoute(handler);
