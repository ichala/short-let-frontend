import axios from '../config/axios';
import { isLoggedIn, Login } from '../redux/slices/auth';

export const UserLogin = async (data, dispatch) => {
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

export const fetchHalls = async () => {
  let halls = [];
  await axios
    .get('/halls')
    .then((response) => {
      if (response.status === 200) {
        halls = response.data;
      }
    })
    .catch((e) => console.log(e.response.data));
  return halls;
};

// eslint-disable-next-line no-return-await
export const addHall = async (data, setClose) => {
  await axios
    .post('/admin/halls', data)
    .then((response) => {
      if (response.status === 200) {
        setClose(true);
      }
    })
    .catch((e) => console.log(e.response.data));
};

export const editHall = async (id) => {
  let hall = null;
  await axios
    .get(`/admin/halls/${id}`)
    .then((response) => {
      if (response.status === 200) {
        hall = response.data;
      }
    })
    .catch((e) => console.log(e.response.data));
  return hall;
};
