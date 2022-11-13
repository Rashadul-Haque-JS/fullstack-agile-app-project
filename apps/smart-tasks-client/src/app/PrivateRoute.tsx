import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const isBLoged = useSelector((state: RootState) => state.business.isBLoged);
  const isULogged = useSelector((state:RootState)=>state.user.isULoged)
  return isBLoged || isULogged? <Outlet /> : <Navigate to="/login" />;
};

export { PrivateRoute };
