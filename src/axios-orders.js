import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://e-commerce-c175e-default-rtdb.firebaseio.com/'
});

export default instance;