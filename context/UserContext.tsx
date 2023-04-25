import { createContext, useContext } from 'react';
import { UserWithoutPassword } from '../interfaces';

interface UserContextValue {
  user: UserWithoutPassword | null;
}

const UserContext = createContext<UserContextValue>({
  user: null,
});

export const useUser = (): UserContextValue => {
  const context = useContext(UserContext);

  return context;
};

export const UserProvider = ({ children, value }) => {
  const user = value || null;

  return <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>;
};
