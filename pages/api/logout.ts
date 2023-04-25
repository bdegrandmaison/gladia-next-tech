import { NextApiResponse } from 'next';
import { withSessionRoute } from '../../lib/session';
import { ReqSession } from '../../interfaces';

async function logout(req: ReqSession, res: NextApiResponse) {
  try {
    req.session.destroy();
    res.end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error logging out' });
  }
}

export default withSessionRoute(logout);
