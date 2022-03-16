import React from 'react';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';

import {auth} from '../firebase-config'

export const NavBar = ({ isAuth, setIsAuth }) => {

  const logOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = '/login'
    });
  };
  return (
    <nav>
      <Link to="/">Home</Link>

      {!isAuth ? (
        <Link to="/login">Login</Link>
      ) : (
        <div>
          <Link to="/createpost">Create Post</Link>
          <button onClick={logOut}>Log Out</button>
        </div>
      )}
    </nav>
  );
};
