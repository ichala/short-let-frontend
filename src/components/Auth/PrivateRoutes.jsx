import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoutes() {
  const user = useSelector((state) => state.user);
  if (!user) {
    return (
      <Navigate to="/login" replace />
    );
  }
  return <Outlet />;
}

export default PrivateRoutes;
