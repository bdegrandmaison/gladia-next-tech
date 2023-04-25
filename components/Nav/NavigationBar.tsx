import { Navbar, NavbarBrand } from 'reactstrap';
import Image from 'next/image';
import { useUser } from '../../context/UserContext';
import { UnknownUserLinks } from './NavLinks/UnknownUserLinks';
import { KnownUserLinks } from './NavLinks/KnownUserLinks';

const navLinksContainerStyle = {
  display: 'flex',
  width: 'full',
  flexDirection: 'row' as const,
  alignItems: 'end',
  fontSize: '1.25rem',
  marginRight: '2em',
  paddingBottom: '0.3em',
};

export const NavigationBar = () => {
  const { user } = useUser();

  return (
    <Navbar color="dark" dark className="mb-5">
      <NavbarBrand href="/">
        <Image alt="logo" src="./images/gladia.svg" height={40} width={40} className="mx-2" />
        Gladia
      </NavbarBrand>
      <div style={navLinksContainerStyle}>
        {!user || !user.isLoggedIn ? <UnknownUserLinks /> : <KnownUserLinks />}
      </div>
    </Navbar>
  );
};
