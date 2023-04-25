import { NextApiRequest, NextApiResponse } from 'next';
import { withSessionRoute } from '../../lib/session';
import { UserSession } from '../../interfaces';

const handler = (req: NextApiRequest & { session?: UserSession }, res: NextApiResponse) => {
  const user = req.session.user;

  if (user) {
    return res.status(200).json(user);
  }

  res.status(204).json(null);
};

export default withSessionRoute(handler);
