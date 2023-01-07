import axios from '../../config/axios';

export default async function GetStats(error, stats) {
  await axios.get('admin/stats').then((res) => {
    if (res.status === 200) {
      stats(res.data.stats);
    }
  }).catch((e) => {
    if (e.toJSON().message === 'Network Error') {
      error('No Internet Or Server is not running');
    } else {
      error(e.response.data.error);
    }
  });
}
