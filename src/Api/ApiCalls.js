import axios from '../config/axios';
import { isLoggedIn, Login } from '../redux/slices/auth';

const baseURL = 'http://localhost:3000';

export default async function UserLogin(data, dispatch) {
  await axios.post(`${baseURL}/login`, data).then((res) => {
    if (res.status === 200) {
      dispatch(Login(res.data));
      dispatch(isLoggedIn());
    } /*  eslint-disable-next-line */
  }).catch((e) => console.log(e.response.data.error));
}

export async function UserSignUp(data, dispatch) {
  console.log(data);
  await axios.post(`${baseURL}/signup`, data).then((res) => {
    if (res.status === 200) {
      dispatch(Login(res.data));
      dispatch(isLoggedIn());
    } /*  eslint-disable-next-line */
  }).catch((e) => console.log(e.response.data.error));
}
