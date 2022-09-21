import axios from '../../config/axios';

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
export const addHall = async (data) => await axios
  .post('/admin/halls', data)
  .then((response) => {
    if (response.status === 200) {
      return response;
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
