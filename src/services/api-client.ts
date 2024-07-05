import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '0cc487cc884f4f25b06fd4c44a8ec3db'
    }
})