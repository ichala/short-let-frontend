import axiosInstance from 'axios';

const { jwt } = JSON.parse(localStorage.getItem('user')) || '';

export default axiosInstance.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { Authorization: jwt },
});
