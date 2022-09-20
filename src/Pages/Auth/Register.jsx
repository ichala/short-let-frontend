import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { UserSignUp } from '../../Api/ApiCalls';

/* eslint-disable no-unused-vars */

const Register = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);
  const navigate = useNavigate();
  // const emailRef = useRef(null);
  // const passwordRef = useRef(null);
  // const nameRef = useRef(null);
  // const passwordConfirmRef = useRef();
  const [formData, setFormData] = useState({});
  const [error, setError] = useState('');
  // const errorMsgs = useSelector(({ signUpReducer }) => signUpReducer.errorMsgs);

  // useEffect(() => {
  //   nameRef.current.focus();
  //   if (errorMsgs !== 'Invalid Email/Password. Please try again') {
  //     setError(errorMsgs);
  //     dispatch(clearErrorAction());
  //   }
  // }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    UserSignUp(formData, dispatch);
    console.log('Clicked');
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setError('');
  //   if (!emailRef.current.value || !passwordRef.current.value || !nameRef.current.value) {
  //     return setError('Please fill out all fields');
  //   }
  //   if (passwordRef.current.value !== passwordConfirmRef.current.value) {
  //     return setError('The passwords do not match');
  //   }

  //   const payload = {
  //     name: nameRef.current.value,
  //     email: emailRef.current.value,
  //     password: passwordRef.current.value,
  //   };

  //   // await dispatch(signUpUser(payload));

  //   // if (errorMsgs) {
  //   //   setError(errorMsgs);
  //   //   dispatch(clearErrorAction());
  //   // } else {
  //   //   navigate('/');
  //   // }
  // };

  return (
    <section className="session-form">
      <div className="session-container">
        <div className="heading">
          <h1>Sign Up</h1>
          <hr />
        </div>
        <div className="errors">
          <p style={{ color: 'red' }}>{error}</p>
        </div>
        <div className="form-container">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="form-group">
              <input type="text" id="first_name" onChange={handleChange} className="input_field" required />
              { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
              <label htmlFor="name" className="input_label">
                First Name
              </label>
            </div>
            <div className="form-group">
              <input type="text" id="last_name" onChange={handleChange} className="input_field" required />
              { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
              <label htmlFor="name" className="input_label">
                Last Name
              </label>
            </div>
            <div className="form-group">
              <input type="email" id="email" onChange={handleChange} className="input_field" required />
              { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
              <label htmlFor="email" className="input_label">
                Email address
              </label>
            </div>
            <div className="form-group">
              <input type={showPassword ? 'text' : 'password'} id="password" onChange={handleChange} className="input_field" required />
              { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
              <label htmlFor="password" className="input_label">
                Password
              </label>
              <button type="button" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEye /> : <FaEyeSlash /> }
              </button>
            </div>
            <div className="form-group">
              <input type={showPasswordConfirmation ? 'text' : 'password'} id="password-confirmation" className="input_field" required />
              { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
              <label htmlFor="password-confirmation" className="input_label">
                Password Confirmation
              </label>
              <button type="button" onClick={() => setShowPasswordConfirmation(!showPasswordConfirmation)}>{showPasswordConfirmation ? <FaEye /> : <FaEyeSlash />}</button>
            </div>
            <div className="submit-btn">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
        <div>
          <p>
            Already have an account?
            <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
