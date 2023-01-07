import axios from '../../config/axios';

export default async function GetHalls(error, setHalls) {
  await axios.get('/public/halls').then((res) => {
    if (res.status === 200) {
      setHalls(res.data);
    }
  }).catch((e) => {
    if (e.toJSON().message === 'Network Error') {
      error('No Internet Or Server is not running');
    } else {
      error(e.response.data.error);
    }
  });
}

export async function GetHall(error, setHall, id) {
  await axios.get(`/public/hall/${id}`).then((res) => {
    if (res.status === 200) {
      setHall(res.data);
    }
  }).catch((e) => {
    if (e.toJSON().message === 'Network Error') {
      error('No Internet Or Server is not running');
    } else if (e.response.status === 404) {
      error('404 : Hall Not Found');
    }
  });
}
