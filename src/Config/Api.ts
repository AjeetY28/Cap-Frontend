import axios from 'axios';

// export const API_URL = "http://localhost:8080";


export const API_URL = "http://13.204.22.7:8080";
// export const DEPLOYED_URL = "https://zosh-bazzar-backend.onrender.com"
// change api

export const api = axios.create({
  baseURL: API_URL, 
  headers: {
    'Content-Type': 'application/json',
  },
});