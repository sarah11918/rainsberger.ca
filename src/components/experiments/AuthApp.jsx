import React, { useState } from 'react';
import LogInButton from './LoginButton.jsx';
import LogOutButton from './LogoutButton.jsx';
import AuthContext from './AuthContext.jsx';

const AuthApp = () => {
   const [auth, setAuth] = useState(false);
   const login = () => {
      setAuth(true);
   };
   const logout = () => {
      setAuth(false);
   };
   return (
      <>
      <AuthContext.Provider
               value={{ auth: auth, login: login, logout: logout }}
         >
         <p>Your logged in status: {`${auth}`} </p>
         <p>{auth ? 'Yay! You are logged in.' : 'You need to click to log in.'}</p>
         <LogInButton />
         <LogOutButton />
      </AuthContext.Provider>
      </>
   );
};
export default AuthApp;