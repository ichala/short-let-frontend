import axios from '../config/axios';
import { Login } from '../redux/slices/auth';

export default async function UserLogin(data, dispatch, error, setLoading) {
  await axios
    .post('/login', data)
    .then((res) => {
      if (res.status === 200) {
        dispatch(Login(res.data));
        window.location.reload();
      }
    })
    .catch((e) => {
      if (e.toJSON().message === 'Network Error') {
        error('No Internet Or Server is not running');
      } else {
        error(e.response.data.error);
      }
      setLoading(false);
    });
}

export async function UserSignUp(data, dispatch, error, setLoading) {
  setLoading(true);
  await axios
    .post('/signup', data)
    .then((res) => {
      if (res.status === 200) {
        dispatch(Login(res.data));
        window.location.reload();
      }
    })
    .catch((e) => {
      if (e.toJSON().message === 'Network Error') {
        error('No Internet Or Server is not running');
      } else {
        error(e.response.data.error);
      }
      setLoading(false);
    });
}

export async function fetchAuthorizedUser(setForm, error) {
  axios
    .get('/authorized').then((response) => {
      setForm({ ...response.data, password: '', confirm_password: '' });
    })
    .catch((e) => {
      error(e.response.data.error);
    });
}
