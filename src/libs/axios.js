import axios from 'axios'

const instance  = axios.create({
    baseURL: 'http://www.omdbapi.com/?apikey=cc6e26b9',
    timeout: 10000,
})

export default instance