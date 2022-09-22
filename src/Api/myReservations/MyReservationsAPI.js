import axios from '../../config/axios';

export default async function GetReservationStats(error, stats) {
  await axios
    .get('/user/reservations')
    .then((res) => {
      if (res.status === 200) {
        stats(res.data);
      }
    })
    .catch((e) => {
      if (e.toJSON().message === 'Network Error') {
        error('No Internet Or Server is not running');
      } else {
        error(e.response.data.error);
      }
    });
}

export const cancelReservation = async (e) => {
  await axios.delete('/user/reservations', { params: { reservation_id: e } }).then(() => {});
};
