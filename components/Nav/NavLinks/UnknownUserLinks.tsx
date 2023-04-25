import Link from 'next/link';

export const UnknownUserLinks = () => (
  <>
    <Link href="/signup">Sign Up</Link>
    <Link href="/login" className="mx-3">
      Login
    </Link>
  </>
);
