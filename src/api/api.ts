import axios from 'axios';

const baseURL = 'https://httpbin.org/';

export const api = axios.create({
    baseURL,
});

api.interceptors.request.use((config) => {
    config.headers['request-startTime'] = new Date().getTime();
    return config
})

api.interceptors.response.use((response) => {
    const currentTime = new Date().getTime()
    const startTime = response.config.headers['request-startTime']
    response.headers['request-duration'] = currentTime - startTime
    return response
})
