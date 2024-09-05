import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, 
  timeout: 10000, 
  headers: {
    'Content-Type': 'application/json'
  },
});

api.interceptors.request.use(
  config => {
    // Modifique a requisição antes de enviá-la, como adicionar tokens de autenticação
    return config;
  },
  error => {
    // Lida com o erro antes de enviar a requisição
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  response => response,
  error => {
    // Lida com o erro da resposta
    return Promise.reject(error);
  }
);

export default api;
