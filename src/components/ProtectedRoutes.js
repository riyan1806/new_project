import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';

const ProtectedRoutes = () => {
    let { user } = useUserAuth();
  //   if(!user){
  //       return <Navigate to = "/Login" />;
  //   }
  // return children;

      return(
        user ? <Outlet/> : <Navigate to = "/Login"/>
      )
}

export default ProtectedRoutes
