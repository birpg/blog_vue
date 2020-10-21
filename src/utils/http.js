import axios from 'axios'
import errorHandle from './errorHandle'

const instance = axios.create({ timeout: 1000 * 12 })
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

instance.interceptors.request.use(
  config => {
    if (config.method === 'POST') {
      config.data = JSON.stringify(config.data)
    }
    const token = sessionStorage.getItem('token')
    token && (config.headers.Authorization = token)
    return config
  },
  error => Promise.reject(error)
)

instance.interceptors.response.use(
  res => (res.status === 200 ? Promise.resolve(res) : Promise.reject(res)),
  error => {
    const { response } = error
    if (response) {
      errorHandle(response.status, response.data.message)
      return Promise.reject(response)
    }
  }
)

export default instance
