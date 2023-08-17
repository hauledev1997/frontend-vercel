import axiosClient from './axiosClient';

const UserAPI = {
  getDetailData: id => {
    const url = `https://haule2.onrender.com/name/${id}`;
    return axiosClient.get(url);
  },

  postSignUp: query => {
    const url = `https://haule2.onrender.com/signup/${query}`;
    return axiosClient.post(url);
  },

  postLogin: data => {
    const url = `https://haule2.onrender.com/users`;
    return axiosClient.post(url, data);
  },
};

export default UserAPI;
