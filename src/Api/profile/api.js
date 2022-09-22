import axios from '../../config/axios';

const updateProfile = async (data) => axios
  .patch('/profile/update', data)
  .then((response) => {
    if (response.status === '200') {
      return response;
    }
    return false;
  })
  .catch((error) => error);

export default updateProfile;
