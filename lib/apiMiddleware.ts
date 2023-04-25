import { NextApiRequest } from 'next';
import { User } from '../interfaces';

export const getCurrentUser = async (
  req: NextApiRequest & { session: { user: User } },
): Promise<User | null> => {
  // Replace this with your actual authentication logic
  return req.session.user || null;
};
