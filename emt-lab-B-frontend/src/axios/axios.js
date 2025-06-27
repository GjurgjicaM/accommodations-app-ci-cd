// import axios from "axios";
//
// const baseURL = process.env.VITE_API_BASE_URL || "http://localhost:9090/api"
//
// const axiosInstance = axios.create({
//     baseURL: baseURL,
//     headers: {
//         "Content-Type": "application/json",
//     },
// });
//
// export default axiosInstance;

import axios from "axios";


const baseURL =
    import.meta.env.MODE === 'development'
        ? 'http://localhost:9090/api' // docker-compose
        : 'http://backend.local/api'; // kubernetes ingress

const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosInstance;