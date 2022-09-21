import axios from '../config/axios';
import { isLoggedIn, Login } from '../redux/slices/auth';

const UserLogin = async (data, dispatch) => {
  await axios
    .post('/login', data)
    .then((res) => {
      if (res.status === 200) {
        dispatch(Login(res.data));
        dispatch(isLoggedIn());
      } /*  eslint-disable-next-line */
    })
    .catch((e) => console.log(e.response.data.error));
};

export default UserLogin;
