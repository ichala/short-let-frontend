import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import UserLogin from '../../Api/ApiCalls';

function Login() {
  const [FormData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = FormData;
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  if (user) {
    return <Navigate to="/" replace />;
  }
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          UserLogin(FormData, dispatch);
        }}
      >
        <div className="mb-3">
          <div id="emailHelp" className="form-text">
            Email
          </div>
          <input
            type="email"
            required
            onChange={onChange}
            name="email"
            value={email}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <div id="emailHelp" className="form-text">
            Password
          </div>
          <input
            onChange={onChange}
            required
            name="password"
            value={password}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default Login;
