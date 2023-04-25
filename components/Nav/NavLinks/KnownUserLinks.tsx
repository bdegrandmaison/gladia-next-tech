import { Button } from 'reactstrap';
import { useUser } from '../../../context/UserContext';
import Link from 'next/link';
import { useRouter } from 'next/router';

const logoutButtonStyle = {
  fontSize: '1.25rem',
};

export const KnownUserLinks = () => {
  const { user } = useUser();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/logout');
      if (response.status === 200) {
        router.reload();
      } else {
        throw new Error(`Logout failed with status ${response.status}`);
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <>
      {!user.hasPaid ? (
        <>
          <Link href="/pay">Payment</Link>
        </>
      ) : (
        <Link href="/transcribe">Transcribe</Link>
      )}
      <Button
        color="link"
        onClick={handleLogout}
        className="mx-3 py-0 px-0"
        style={logoutButtonStyle}
      >
        Logout
      </Button>
    </>
  );
};
