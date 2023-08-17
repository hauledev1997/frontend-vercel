import axiosClient from './axiosClient';

const headers = {
  authorization: 'Bearer ' + localStorage.getItem('token'),
};

const CheckoutAPI = {
  postEmail: data => {
    const url = `https://haule2.onrender.com/email`;
    return axiosClient.post(url, JSON.stringify(data), { headers });
  },
};

export default CheckoutAPI;
