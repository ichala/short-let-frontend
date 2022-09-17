import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import UserLogin from '../../Api/ApiCalls';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <button type="button" onClick={() => UserLogin({ email: 'admin@admin.com', password: 'admin123' }, dispatch, navigate)}>LOGIN</button>
    </>
  );
}

export default Login;
