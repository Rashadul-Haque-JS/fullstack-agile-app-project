import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const isLoged = useSelector((state: RootState) => state.business.isBLoged);
  return isLoged ? <Outlet /> : <Navigate to="/login" />;
};

export { PrivateRoute };
