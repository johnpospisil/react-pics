import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 38d5c414f5c3c927f8391dae84b618211535b915ab1965da020eb5a762e993e0'
  }
});