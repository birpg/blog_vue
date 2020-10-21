import axios from '../utils/http'
import base from './base'

const api = {
  getArticleList(params) {
    return axios.get(base.getArticleList, params)
  },
  getArticleById(params) {
    return axios.get(base.getArticleById, params)
  },
  getTypeInfo(params) {
    return axios.get(base.getTypeInfo, params)
  },
  getListById(params) {
    return axios.get(base.getListById, params)
  }
}

export default api
