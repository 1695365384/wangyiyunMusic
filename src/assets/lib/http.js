import axios from 'axios'

const http = axios.create({
    baseURL: 'http://localhost:3000'
})

http.interceptors.request.use((config) => {
    config.withCredentials = true
    return config
}, (err) => {
    return Promise.reject(err)
})


export default http