import { get,post } from '../axiosConfig'
export default {
  login(params) {
    return post('/passport/login', params)
  },
  getList(params) {
    return get('/lists', params)
  }
}
