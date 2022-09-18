import React from 'react';
import { useSelector } from 'react-redux';

function PrivateRoutes({ children }) {
  const user = useSelector((state) => state.user);
  if (!user) {
    return (
      <div>404</div>
    );
  }
  return children;
}

export default PrivateRoutes;
