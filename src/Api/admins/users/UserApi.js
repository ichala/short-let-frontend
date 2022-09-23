import axios from '../../../config/axios';

export const fetchUsers = async () => {
  let users = [];
  await axios
    .get('/users')
    .then((response) => {
      if (response.status === 200) {
        users = response.data;
      }
    })
    .catch((e) => console.log(e.response.data));
  return users;
}

export const addUser = async (data) => axios
  .post('/admin/users', data)
  .then((response) => {
    if (response.status === 200) {
      return response;
    }
    return null;
  })
  .catch((e) => console.log(e.response.data));

export const updateUser = async (data) => axios
  .patch('/admin/users', data)
  .then((response) => {
    if (response.status === 200) {
      return response;
    }
    return false;
  })
  .catch((e) => console.log(e.response.data));

export const removeUser = async (id) => axios
  .delete(`/admin/users/${id}`)
  .then((response) => {
    if (response.status === 200) {
      return response.data;
    }
    return null;
  })
  .catch((e) => console.log(e.response.data));
