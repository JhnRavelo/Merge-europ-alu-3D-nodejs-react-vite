import axios from 'axios'

const url = "http://localhost:5000"

const defaultAxios = axios.create({
  baseURL:url,
  withCredentials: true,
})

const privateAxios = axios.create({
  baseURL:url,
  withCredentials: true,
  headers:{"Content-Type":'application/json'}
})

export default defaultAxios

export {privateAxios}

