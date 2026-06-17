// src/components/common/ProtectedRoute.jsx
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = () => {
  const token = useSelector((state) => state.auth?.token);
  // If no token, redirect to login
  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
