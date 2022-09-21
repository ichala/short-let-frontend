import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import UserLogin from '../../Api/ApiCalls';

function Login() {
  const [FormData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [Loading, setLoading] = useState(false);

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
  const handleSubmit = (e) => {
    e.preventDefault();
    UserLogin(FormData, dispatch, setError, setLoading);
  };
  return (
    <>
      <div className="heading">
        <h1>Login</h1>
        <hr />
      </div>
      {error && (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
      )}
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-3">
          <div id="emailHelp" className="form-text">Email</div>
          <input type="email" required onChange={onChange} name="email" className="form-control" />
        </div>
        <div className="mb-3">
          <div id="emailHelp" className="form-text">Password</div>
          <input onChange={onChange} required name="password" type="password" className="form-control" />
        </div>

        {Loading ? (<div className="spinner-grow text-sm text-center text-success" role="status" />) : (<button type="submit" className="btn btn-success">Login</button>)}
      </form>

    </>
  );
}

export default Login;
