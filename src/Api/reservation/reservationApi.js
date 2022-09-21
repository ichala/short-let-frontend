import axios from '../../config/axios';

export default async function PostReservation(error, reservation) {
  await axios
    .post('/user/reservation')
    .then((res) => {
      if (res.status === 200) {
        reservation(res.data.reservation);
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

export const checkDate = (setError, setAvailableHalls, date) => {
  axios
    .post('/reservation/check_date', { reserve_date: date })
    .then((res) => {
      if (res.data.available.length === 0) {
        setError({ message: 'No halls availble. Please choose another date' });
      } else {
        setAvailableHalls(res.data.available);
      }
    })
    .catch((e) => {
      if (e.toJSON().message === 'Network Error') {
        setError('No Internet Or Server is not running');
      } else {
        setError(e.response.data.error);
      }
    });
};
