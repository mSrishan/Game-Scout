import axios from "axios";

export default axios.create({
    params: {
        baseURL: 'https://api.rawg.io/api',
        key: 'd6d58597aed549c8ae7c79de62bd5450'
    }
})