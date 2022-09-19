import axios from '../config/axios';
import { Login } from '../redux/slices/auth';

export default async function UserLogin(data, dispatch) {
  await axios.post('/login', data).then((res) => {
    if (res.status === 200) {
      dispatch(Login(res.data));
      window.location.reload();
    } /*  eslint-disable-next-line */
  }).catch((e) => console.log(e.response.data.error));
}
