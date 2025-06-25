import axios from "axios";

const baseURL = process.env.VITE_API_BASE_URL || "http://localhost:9090/api"

const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosInstance;