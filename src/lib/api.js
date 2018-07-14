import axios from 'axios';

export const defaultHeaders = {
  'Content-Type': 'application/json',
};

export const postHeaders = {
  'Accept': '*/*',
  'Content-Type': 'text/plain',
};

export function request(params) {
  const { url, method, payload } = params;
  const headers = method === 'POST' ? postHeaders : defaultHeaders;
  const options = {
     url,
     headers,
     method,
    ...{ data: payload },
  };
  return genericRequest(options);
}

function genericRequest(options) {
  return new Promise(
    function (resolve) {
      axios.request(options)
        .then((response) => {
          resolve(response);
        })
        .catch((errorResponse) => {
          const response = errorResponse.response;
          console.warn(response);
        });
    });
}
