import router from 'vue-router'
const errorHandle = (status, other) => {
  switch (status) {
    case 401:
      toLogin()
      break
    case 403:
      console.log('登录过期')
      sessionStorage.removeItem('token')
      setTimeout(() => {
        toLogin()
      }, 1000)
      break
    case 404:
      console.log('资源不存在')
      break
    default:
      console.log(other)
  }
}

const toLogin = () => {
  router.replace({
    path: '/login',
    query: {
      redirect: router.currentRoute.fullPath
    }
  })
}

export default errorHandle
