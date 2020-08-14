import axios from 'axios';
import {server, api} from './globals';
const logoutClient = axios.create({
  baseURL: server + api(),
  timeout: 10000,
  params: {},
});

logoutClient.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    return Promise.reject(error.response);
  },
);

const getLogoutClient = () => {
  return logoutClient;
};

export default getLogoutClient;
