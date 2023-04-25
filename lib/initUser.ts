import { redisGet, redisSet } from '../lib/redis';

async function initUser(): Promise<void | Error> {
  const userData = await redisGet('user');
  if (!userData) {
    await redisSet('user', {
      id: 'eab77de5-af27-49bf-8594-b5db74d21988',
      name: 'user',
      email: 'user@user.com',
      password: '$2b$10$o8qT8/jO7JiVujrepAXEguJvQsNoQSivZ1PgqrBTkfU1tR2NM0rTy',
    });
    await redisSet('eab77de5-af27-49bf-8594-b5db74d21988', { hasPaid: false });
  } else {
    return {
      name: 'Error',
      message: 'User already defined',
    } as Error;
  }
}

export default initUser;
