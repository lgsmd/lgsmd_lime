let defaultStatus = 'logOut'
try {
  if (localStorage.loginStatus === 'login') {
    defaultStatus = localStorage.loginStatus
  }
} catch (e) {}

export default {
  state: {
    loginStatus: defaultStatus
  },
  mutations: {
    login (state) {
      state.loginStatus = 'login'
      try {
        localStorage.loginStatus = 'login'
      } catch (e) {}
    },
    logOut (state) {
      state.loginStatus = 'logOut'
      try {
        localStorage.loginStatus = 'logOut'
      } catch (e) {}
    }
  }
}
