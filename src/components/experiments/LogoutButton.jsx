import React, { useContext } from 'react';
import AuthContext from './AuthContext.jsx';

const LogoutButton = () => {
   const auth = useContext(AuthContext);
   return (
      <>
         <button onClick={auth.logout}>Click To Logout</button>
      </>
   );
};
export default LogoutButton;