import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function Register() {
  const user = useSelector((state) => state.user);
  if (user) {
    return <Navigate to="/" replace />;
  }
  return (
    <div>
      <h1>Register</h1>
    </div>
  );
}

export default Register;
