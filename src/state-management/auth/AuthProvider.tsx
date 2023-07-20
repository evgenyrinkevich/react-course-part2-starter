import { ReactNode, useReducer } from 'react';
import AuthContext from './authContext';

interface Login {
  type: 'LOGIN';
  user: string;
}

interface Logout {
  type: 'LOGOUT';
}

export type AuthAction = Login | Logout;

interface Task {
  id: number;
  title: string;
}

const authReducer = (user: string, action: AuthAction): string => {
  switch (action.type) {
    case 'LOGIN':
      return action.user;
    case 'LOGOUT':
      return '';
    default:
      return user;
  }
};

interface Props {
  children: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const [user, dispatch] = useReducer(authReducer, '');

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
