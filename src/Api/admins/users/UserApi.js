import axios from '../../../config/axios';

export const fetchUsers = async (setError, setUsers) => {
  const users = [];
  await axios
    .get('/admin/users')
    .then((response) => {
      if (response.status === 200) {
        setUsers(response.data);
      }
    })
    .catch((e) => setError(e.response.data));
  return users;
};

export const updateUser = async (data) => axios
  .patch('/admin/user/update', data)
  .then((response) => {
    if (response.status === 200) {
      console.log(response.status);
    }
  })
  .catch((e) => console.log(e.response.data));

export const removeUser = async (id) => axios
  .delete('/admin/user/destroy', { data: { id } })
  .then((response) => {
    if (response.status === 200) {
      console.log(response);
    }
    return null;
  })
  .catch((e) => console.log(e.response.data));
