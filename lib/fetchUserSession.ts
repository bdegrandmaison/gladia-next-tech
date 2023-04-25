import { GetServerSidePropsContext } from 'next';
import { UserWithoutPassword } from '../interfaces';

export async function fetchUserSession(
  ctx: GetServerSidePropsContext,
): Promise<UserWithoutPassword | null> {
  const res = await fetch('http://localhost:3000/api/getsession', {
    headers: ctx.req ? { cookie: ctx.req.headers.cookie ?? '' } : undefined,
  });

  if (res.status === 204) {
    return null;
  }

  const user: UserWithoutPassword = await res.json();
  return user;
}
