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

// eslint-disable-next-line no-return-await
export const editHall = async (id) => await axios
  .get(`/admin/halls/${id}`)
  .then((response) => {
    if (response.status === 200) {
      return response.data;
    }
    return null;
  })
  .catch((e) => console.log(e.response.data));

// eslint-disable-next-line no-return-await
export const updateHall = async (data) => await axios
  .patch('/admin/halls', data)
  .then((response) => {
    if (response.status === 200) {
      return response;
    }
    return false;
  })
  .catch((e) => console.log(e.response.data));

// eslint-disable-next-line no-return-await
export const removeHall = async (id) => await axios
  .delete(`/admin/halls/${id}`)
  .then((response) => {
    if (response.status === 200) {
      return response.data;
    }
    return null;
  })
  .catch((e) => console.log(e.response.data));
