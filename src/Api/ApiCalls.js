import axios from '../config/axios';
import { Login } from '../redux/slices/auth';

export default async function UserLogin(data, dispatch, navigate) {
  await axios.post('/login', data).then((res) => {
    if (res.status === 200) {
      dispatch(Login(res.data));
      navigate('/');
    } /*  eslint-disable-next-line */
  }).catch((e) => console.log(e.response.data.error));
}
