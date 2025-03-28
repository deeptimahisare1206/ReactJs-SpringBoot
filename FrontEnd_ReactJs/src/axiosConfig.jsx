import axios from "axios";
  
  const axiosInstance = axios.create({
    headers: {
      'Content-Type': 'application/json'
    }
  });
  
  axiosInstance.interceptors.request.use(
    (config) => {
      
        const configs = {
            API_URL: 'http://localhost:8090/',
            API_USERNAME: 'Ayush',
            API_PASSWORD: '1234',
          };
      config.auth = {
        username: configs.API_USERNAME,
        password: configs.API_PASSWORD
      };
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  
  export default axiosInstance;
  
