import { useDispatch } from 'react-redux';
import axios from '../config/axios';
import { Login } from '../redux/slices/auth';

const dispatch = useDispatch();

export default async function UserLogin(data) {
  await axios.post('/login', data).then((res) => {
    if (res.status === 200) {
      dispatch(Login(res.data));
      window.location.reload();
    }
  }).catch((e) => console.log(e.response.data.error));
}
