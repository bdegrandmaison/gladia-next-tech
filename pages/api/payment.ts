import { NextApiResponse } from 'next';
import Stripe from 'stripe';
import { redisUpdateField } from '../../lib/redis';
import { ReqSession } from '../../interfaces';
import { withSessionRoute } from '../../lib/session';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: '2022-11-15' });

async function handler(req: ReqSession, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { amount, userId } = req.body;

      if (!userId) {
        return res.status(400).json({ message: 'User ID is required' });
      }

      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: 'eur',
        payment_method_types: ['card'],
      });

      try {
        await redisUpdateField(userId, '.hasPaid', true);
      } catch (error) {
        console.error('Error updating Redis:', error);
        return res.status(500).json({ message: 'Error updating user payment status' });
      }

      if (req.session.user) {
        req.session.user = { ...req.session.user, hasPaid: true };
        await req.session.save();
        res.status(200).json({ clientSecret: paymentIntent.client_secret });
      }
    } catch (error) {
      res.status(500).json({ statusCode: 500, message: error.message });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}

export default withSessionRoute(handler);
