import React, { useEffect, useContext } from 'react';
import Admin from './pages/Admin';
import Login from './pages/Login';
import { AuthenticationConext } from './App';

function ProtectedRoute() {
  const authentication = useContext(AuthenticationConext);

  useEffect(() => {
    if (localStorage.getItem('authenticated')) {
      authentication.setAutheticated(true);
    }
  }, [authentication.autheticated]);

  if (authentication.autheticated) {
    return <Admin />;
  } else {
    return <Login />;
  }
}

export default ProtectedRoute;
