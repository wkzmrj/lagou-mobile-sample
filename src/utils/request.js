import axios from 'axios'
import store from '@/store'
import router from '@/router'

const request = axios.create({
  baseURL: 'http://edufront.lagounews.com'

})
// 请求拦截器接口鉴权
request.interceptors.request.use(config => {
  const { user } = store.state
  if (user && user.access_token) {
    config.headers.Authorization = user.access_token
  }
  return config
})

// 跳转登录函数
function redirectLogin () {
  router.push({
    name: 'login',
    query: {
      redirect: router.currentRoute.fullPath
    }
  })
}
// 标记token的刷新状态，存储等待的请求
let isRefreshing = false
let requests = []
request.interceptors.response.use(response => {
  return response
}, async error => {
  if (error.response) {
    if (error.response.status === 401) {
      if (!store.state.user) {
        redirectLogin()
        return Promise.reject(error)
      }
      // 是否存在刷新token的请求
      if (isRefreshing) {
        return request.push(() => {
          request(error.config)
        })
      }
      isRefreshing = true
      // 刷新token
      const { data } = await request({
        method: 'POST',
        url: '/front/user/refresh_token',
        data: new window.URLSearchParams({
          refreshtoken: store.state.user.refresh_token
        }).toString()
      })
      if (data.state !== 1) {
        store.commit('setUser', null)
        redirectLogin()
        return Promise.reject(error)
      }
      store.commit('setUser', data.content)
      // requests的所有请求重新发送
      requests.forEach(callback => callback())
      requests = []
      isRefreshing = false
      return request(error.config)
    }
  }
  return Promise.reject(error)
})
export default request
