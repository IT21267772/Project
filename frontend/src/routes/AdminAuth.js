import React, { useContext, useEffect, useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

const AdminAuth = () => {
  const { user } = useContext(UserContext);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating delay to retrieve user data
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(delay);
  }, []);

  // Check if user exists and isAdmin is true
  const isAuthenticated = !isLoading && user && user.isAdmin;

  if (isLoading) {
    return <div></div>;
  }

  return (
    isAuthenticated ? (
      <Outlet />
    ) : (
      <Navigate to={user ? 'error' : 'signin'} state={{ from: location }} replace />
    )
  );
};

export default AdminAuth;
