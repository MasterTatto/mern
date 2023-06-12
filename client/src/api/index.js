import axios from "axios";

const url = 'http://localhost:5000/'


export default function api() {

    const instance = axios.create({
        baseURL: url,
    });

    return instance;
}
