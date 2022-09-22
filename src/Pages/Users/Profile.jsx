import { useEffect, useState } from 'react';
import { fetchAuthorizedUser } from '../../Api/ApiCalls';

const Profile = () => {
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    role: '',
    email: '',
  });

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchAuthorizedUser()
      .then((profile) => {
        setForm(profile.data);
        setIsLoading(false);
      })
      .catch((e) => {
        error(e.response.data.error);
        setIsLoading(false);
      });
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(null);
  };

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
        <form onSubmit={() => alert('hello')}>
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
              required
            />
          </div>
          <div className="form-group">
            Password Confirmation
            <input
              type="password"
              name="password_confirmation"
              onChange={handleChange}
              className="form-control mb-2"
              required
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
