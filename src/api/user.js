import ajax from '@/utils/ajax'
export default {
  Login({username = '', password = ''}) {
    return ajax({
      method: 'post',
      url: '/login',
      data: {
        username,
        password,
      }
    })
  },
  Logout({username = ''}) {
    return ajax({
      method: 'post',
      url: '/logout',
      data: {
        username
      }
    })
  }
}