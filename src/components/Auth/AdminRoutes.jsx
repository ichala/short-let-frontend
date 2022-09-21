import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

function AdminRoutes() {
  const user = useSelector((state) => state.user);
  if (!user && user?.role !== 'admin') {
    return (
      <Navigate to="/" replace />
    );
  }
  return <Outlet />;
}

export default AdminRoutes;
