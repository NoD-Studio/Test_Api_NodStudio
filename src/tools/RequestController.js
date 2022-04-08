import axios from 'axios';

const RequestController = {
  get: (url) => new Promise((succes, fail) => {
    axios.get(
      `${process.env.REACT_APP_API_URL}${url}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('auth-token')}`,
        },
      },
    ).then(succes).catch(fail);
  }),
  post: (url, body) => new Promise((succes, fail) => {
    axios.post(
      `${process.env.REACT_APP_API_URL}${url}`,
      body,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('auth-token')}`,
        },
      },
    ).then(succes).catch(fail);
  }),
  put: (url, body) => new Promise((succes, fail) => {
    axios.put(
      `${process.env.REACT_APP_API_URL}${url}`,
      body,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('auth-token')}`,
        },
      },
    ).then(succes).catch(fail);
  }),
  delete: (url) => new Promise((succes, fail) => {
    axios.delete(
      `${process.env.REACT_APP_API_URL}${url}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('auth-token')}`,
        },
      },
    ).then(succes).catch(fail);
  }),
};

export default RequestController;
