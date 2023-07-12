interface Login {
  type: 'LOGIN';
  user: string;
}

interface Logout {
  type: 'LOGOUT';
}

type AuthAction = Login | Logout;

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

export default authReducer;
