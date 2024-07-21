import axios from 'axios';  
axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';

const apiClient = axios.create({
    baseURL: 'http://54.197.26.169:8000',
    headers: {
      'Content-Type': 'application/json',
    },
  });

const ApiService = {
    register(endpoint, data) {
        console.log("Inside login ", endpoint)
        return apiClient.post(endpoint, data);
        },

};

export default ApiService;