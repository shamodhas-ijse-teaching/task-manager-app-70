import axios from "axios"

const api = axios.create({
  baseURL: "https://689f09413fed484cf878cf87.mockapi.io/api/v1",
  timeout: 10000
})

api.interceptors.request.use(async (config:any) => {
    // config.headers.Authorization = `Bearer ${token}` 
  return config
})

api.interceptors.response.use(async (config:any) => {
  // 
  return config
})

export default api
