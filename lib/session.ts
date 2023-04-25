/* import { NextApiRequest, NextApiResponse } from 'next';
import session from 'express-session';
import RedisStore from 'connect-redis';
import { redis } from './redis';
import { UserWithoutPassword } from '../interfaces';

const redisStore = new RedisStore({
  client: redis,
  prefix: 'myapp:',
});

const sessionMiddleware = session({
  store: redisStore,
  secret: process.env.SESSION_SECRET || 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
  },
});

const withSession = (
  handler: (
    req: NextApiRequest & {
      session?: {
        user: UserWithoutPassword;
      };
    },
    res: NextApiResponse,
  ) => Promise<void>,
) => {
  return async (
    req: NextApiRequest & {
      session?: {
        user: UserWithoutPassword;
      };
    },
    res: NextApiResponse,
  ) => {
    await sessionMiddleware(req, res);
    return handler(req, res);
  };
};

export default withSession; */

import { withIronSessionApiRoute, withIronSessionSsr } from 'iron-session/next';
import { GetServerSidePropsContext, GetServerSidePropsResult, NextApiHandler } from 'next';

export const sessionOptions = {
  password: 'complex_password_at_least_32_characters_long',
  cookieName: 'myapp_cookiename',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
};

export function withSessionRoute(handler: NextApiHandler) {
  return withIronSessionApiRoute(handler, sessionOptions);
}

export function withSessionSsr<P extends { [key: string]: unknown } = { [key: string]: unknown }>(
  handler: (
    context: GetServerSidePropsContext,
  ) => GetServerSidePropsResult<P> | Promise<GetServerSidePropsResult<P>>,
) {
  return withIronSessionSsr(handler, sessionOptions);
}
