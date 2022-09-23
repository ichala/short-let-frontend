import axios from '../../config/axios';

export const PostReservation = (setError, date, setloading, hall, setSaved) => {
  setloading(true);
  axios
    .post('/user/reservation', { reserve_date: date, hall_id: hall.id })
    .then((res) => {
      if (res.status === 200) {
        setSaved(true);
      }
    })
    .catch((e) => {
      if (e.toJSON().message === 'Network Error') {
        setError({ message: 'No Internet Or Server is not running' });
        setloading(false);
      } else {
        setError(e.response.data.message);
        setloading(false);
      }
    });
};

export const checkDate = (setError, setAvailableHalls, date, setloading) => {
  setloading(true);
  axios
    .post('/reservation/check_date', { reserve_date: date })
    .then((res) => {
      if (res.data.available.length === 0) {
        setError({ message: 'No halls availble. Please choose another date' });
        setloading(false);
      } else {
        setAvailableHalls(res.data.available);
        setloading(false);
      }
    })
    .catch((e) => {
      if (e.toJSON().message === 'Network Error') {
        setError({ message: 'No Internet Or Server is not running' });
        setloading(false);
      } else {
        setError(e.response.data.error);
        setloading(false);
      }
    });
};
