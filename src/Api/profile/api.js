import axios from '../../config/axios';

const updateProfile = async (data) => axios
  .patch('/profile/update', data);

export default updateProfile;
