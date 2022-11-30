import axios from "axios";

const api_url = axios.create({
    baseURL: "http://localhost:5000",
    headers: {
        "Content-type": "application/json"
    }
})

export default api_url;