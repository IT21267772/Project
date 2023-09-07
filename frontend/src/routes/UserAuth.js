import React, { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';


const UserAuth = () => {

  const {user} = useContext(UserContext)

  const location = useLocation()

  return (
      user
      ? <Outlet />
      : <Navigate to="/signin" state={{ from: location }} replace /> 
  )
}

export default UserAuth