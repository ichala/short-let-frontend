import axios from '../../../config/axios';

export default async function fetchRequests(error, stats) {
  await axios
    .get('admin/requests/pending')
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

export async function allRequests(error, stats) {
  await axios
    .get('/admin/reservations')
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

export const manageRequest = async (data) => {
  await axios.patch('/admin/requests/pending', data);
};
