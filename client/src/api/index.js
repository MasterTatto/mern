import axios from "axios";

// const url = 'http://localhost:5000/'
const url = 'https://mern-api-b65v.onrender.com/'


export default function api() {

    const instance = axios.create({
        baseURL: url,
    });

    return instance;
}
