import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { UserSignUp } from '../../Api/ApiCalls';

const Register = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [Loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setError(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.password_confirmation) {
      setError("password & password confirmation dosen't match ");
    } else {
      UserSignUp(formData, dispatch, setError, setLoading);
    }
  };
  const user = useSelector((state) => state.user);
  if (user) {
    return <Navigate to="/" replace />;
  }
  return (
    <>
      <div className="heading">
        <h1>Sign Up</h1>
        <hr />
      </div>
      {error && (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
      )}

      <div className="form-container">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="form-group">
            First Name
            <input type="text" id="first_name" onChange={handleChange} className="form-control mb-2" required />

          </div>
          <div className="form-group">
            Last Name
            <input type="text" id="last_name" onChange={handleChange} className="form-control mb-2" required />

          </div>
          <div className="form-group">
            Email
            <input type="email" id="email" onChange={handleChange} className="form-control mb-2" required />

          </div>
          <div className="form-group">
            Password
            <input type="password" id="password" onChange={handleChange} className="form-control mb-2" required />

          </div>
          <div className="form-group">
            Password Confirmation
            <input type="password" id="password_confirmation" onChange={handleChange} className="form-control mb-2" required />
          </div>
          <div className="submit-btn mt-4">
            {!Loading ? (<button type="submit" className="btn btn-primary">Signup</button>) : (<div className="spinner-grow text-sm text-center text-primary" role="status" />)}
          </div>
        </form>
      </div>
      <div>
        <p className="mt-2">
          Already have an account?
          <Link className="ml-1" to="/login">Login</Link>
        </p>
      </div>

    </>
  );
};

export default Register;
