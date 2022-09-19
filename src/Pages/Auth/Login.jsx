import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import UserLogin from '../../Api/ApiCalls';

function Login() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  if (user) {
    return <Navigate to="/" replace />;
  }
  return (
    <>
      <button className="btn btn-success" type="button" onClick={() => UserLogin({ email: 'admin@admin.com', password: 'admin123' }, dispatch)}>LOGIN</button>
    </>
  );
}

export default Login;
