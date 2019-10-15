import axios from 'axios'
import qs from 'qs'
import config from '@/config'
// import { Message } from 'element-ui'
// 响应时间
axios.defaults.timeout = 5000
// 配置cookie
// axios.defaults.withCredentials = true
// 配置请求头
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded;charset=UTF-8'
const baseURL = process.env.NODE_ENV === 'production' ? config.baseURL : ''
// 配置接口地址
axios.defaults.baseURL = baseURL

// POST传参序列化(添加请求拦截器)
axios.interceptors.request.use(
  config => {
    if (config.method === 'post') {
      config.data = qs.stringify(config.data)
    }
    return config
  },
  err => {
    // console.log('错误的传参', 'fail')
    // Message.error('错误的传参')
    return Promise.reject(err)
  }
)
// 返回状态判断(添加响应拦截器)
axios.interceptors.response.use(
  res => {
    if (res.data.code === 200) {
      return res.data.data
    } else {
      return Promise.reject(res)
    }
  },
  err => {
    // console.log('异常：' + err.message)
    // Message.error('接口异常：' + err.message)
    return Promise.reject(err.message)
  }
)
// GET 请求方式
export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params
      })
      .then(
        data => {
          resolve(data)
        },
        err => {
          reject(err)
        }
      )
      .catch(error => {
        reject(error)
      })
  })
}
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then(
        data => {
          resolve(data)
        },
        err => {
          reject(err)
        }
      )
      .catch(error => {
        reject(error)
      })
  })
}

// import axios from 'axios'
// import Cookies from 'js-cookie'
// import { Loading } from 'element-ui'
// let loading
// let pending = []
// let CancelToken = axios.CancelToken

// let cancelPending = config => {
//   pending.forEach((item, index) => {
//     if (config) {
//       if (item.UrlPath === config.url) {
//         item.Cancel() // 取消请求
//         pending.splice(index, 1) // 移除当前请求记录
//       }
//     } else {
//       item.Cancel() // 取消请求
//       pending.splice(index, 1) // 移除当前请求记录
//     }
//   })
// }

// let startLoading = () => {
//   // 使用Element loading-start 方法
//   loading = Loading.service({
//     lock: true,
//     text: '加载中……'
//     // background: 'rgba(0, 0, 0, 0.7)'
//   })
// }
// let endLoading = () => {
//   // 使用Element loading-close 方法
//   loading.close()
// }
// // 创建axios实例
// const service = axios.create({
//   baseURL: process.env.BASE_API, // api的base_url
//   timeout: 600000 // 请求超时时间
// })

// service.interceptors.request.use(
//   config => {
//     if (Cookies.get('Admin-Token')) {
//       config.headers['Authorization'] = Cookies.get('Admin-Token')
//     }
//     cancelPending(config)
//     config.cancelToken = new CancelToken(res => {
//       pending.push({ UrlPath: config.url, Cancel: res })
//     })
//     startLoading()
//     return config
//   },
//   (error, response) => {
//     console.log(error)
//     console.log(response)
//   }
// )

// service.interceptors.response.use(
//   response => {
//     endLoading()
//     cancelPending(response.config)
//     return response.data
//   },
//   error => {
//     console.log(error)
//     return Promise.reject(error)
//   }
// )
// export default service
