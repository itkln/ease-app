import axios from "axios";

const instance = axios.create({
    baseURL: 'https://localhost:8080/api/v1/',
    timeout: 5000,
    headers: {'Accept': 'application/json'},
});

export default instance;