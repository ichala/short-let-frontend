import axios from '../../../config/axios';

export default async function GetUsers(error, users) {
  await axios.get('admin/users').then((res) => {
    if (res.status === 200) {
      users(res.data);
    }
  }).catch((e) => {
    if (e.toJSON().message === 'Network Error') {
      error('No Internet Or Server is not running');
    } else {
      error(e.response.data.error);
    }
  });
}
