import { NextApiRequest, NextApiResponse } from 'next';
import initUser from '../../lib/initUser';

const initialize = async (_req: NextApiRequest, res: NextApiResponse) => {
  const error = await initUser();
  if (error) {
    res.status(500).json({
      message: 'Error initializing RedisJSON store',
      error: error.message,
    });
  } else {
    const message = 'RedisJSON store initialized';
    res.status(200).json({ message });
  }
};

export default initialize;
