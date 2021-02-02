import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://basic-crud-10f6a-default-rtdb.firebaseio.com/'
});

export default instance;