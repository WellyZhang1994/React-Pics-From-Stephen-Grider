import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers:{
        Authorization: 'Client-ID 35af272a3be2fe2046bc2df80d5a49ce8ea8e5723f017c0ac8f80758279fa2c5'
    }
});