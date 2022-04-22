import { createContext } from 'react';

const AuthContext = createContext({
   auth: null,
   login: () => {},
   logout: () => {},
});
export default AuthContext;