import axios from '../../../config/axios';

export const fetchHalls = async () => {
  let halls = [];
  await axios
    .get('/halls')
    .then((response) => {
      if (response.status === 200) {
        halls = response.data;
      }
    });

  return halls;
};

export const addHall = async (data) => axios
  .post('/admin/halls', data)
  .then((response) => {
    if (response.status === 200) {
      return response;
    }
    return null;
  });

export const updateHall = async (data) => axios
  .patch('/admin/halls', data)
  .then((response) => {
    if (response.status === 200) {
      return response;
    }
    return false;
  });

export const removeHall = async (id) => axios
  .delete(`/admin/halls/${id}`)
  .then((response) => {
    if (response.status === 200) {
      return response.data;
    }
    return null;
  });
