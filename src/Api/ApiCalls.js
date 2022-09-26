import axios from '../config/axios';
import { isLoggedIn, Login } from '../redux/slices/auth';

export default async function UserLogin(data, dispatch, error, setLoading) {
  await axios
    .post('/login', data)
    .then((res) => {
      if (res.status === 200) {
        dispatch(Login(res.data));
        dispatch(isLoggedIn());
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
        dispatch(isLoggedIn());
        setLoading(false);
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

export const fetchAuthorizedUser = async () => axios
  .get('/authorized')
  .then((response) => {
    if (response.status === 200) return response;
    return null;
  })
  .catch((e) => e);
