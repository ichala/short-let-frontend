import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { fetchAuthorizedUser } from '../../Api/ApiCalls';
import updateProfile from '../../Api/profile/api';

const Profile = () => {
  const [form, setForm] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    fetchAuthorizedUser(setForm, setError);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(null);
  };
  const submit = (e) => {
    setIsLoading(true);
    e.preventDefault();
    if (form.password !== form.confirm_password) {
      setError('Make sure the password and password confirmation fields are the same.');
    } else {
      updateProfile(form)
        .then(() => {
          setForm({ ...form, password: '', confirm_password: '' });
          Swal.fire({
            title: 'Updated',
            text: 'Your profile has been updated successfully.',
            icon: 'info',
            confirmButtonText: 'Cool',
          });
          setIsLoading(false);
          setError(null);
        })
        .catch((e) => {
          if (e.response.status === 501) {
            setError('Email Exist, please choose another one');
          } else {
            setError('Server Error try again later');
          }
          setIsLoading(false);
        });
    }
  };
  if (!form) {
    return (
      <>
        {!error ? (
          <div className="d-flex justify-content-center">
            <div
              className="spinner-grow text-lg text-center text-success"
              role="status"
            />
          </div>
        ) : (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
      </>
    );
  }
  return (
    <>
      <div className="heading">
        <h1>Update your profile info</h1>
        <hr />
      </div>
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      <div className="form-container">
        <form onSubmit={submit}>
          <div className="form-group">
            First Name
            <input
              type="text"
              name="first_name"
              onChange={handleChange}
              className="form-control mb-2"
              value={form.first_name}
              required
            />
          </div>
          <div className="form-group">
            Last Name
            <input
              type="text"
              name="last_name"
              onChange={handleChange}
              className="form-control mb-2"
              value={form.last_name}
              required
            />
          </div>
          <div className="form-group">
            Email
            <input
              type="email"
              name="email"
              onChange={handleChange}
              className="form-control mb-2"
              value={form.email}
              required
            />
          </div>
          <div className="form-group">
            Password
            <input
              type="password"
              name="password"
              onChange={handleChange}
              className="form-control mb-2"
              value={form.password}
            />
          </div>
          <div className="form-group">
            Password Confirmation
            <input
              type="password"
              name="confirm_password"
              onChange={handleChange}
              className="form-control mb-2"
              value={form.confirm_password}
            />
          </div>
          <div className="submit-btn mt-4">
            {!isLoading ? (
              <button type="submit" className="btn btn-primary">
                Update
              </button>
            ) : (
              <div className="spinner-grow text-sm text-center text-primary" role="status" />
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default Profile;
