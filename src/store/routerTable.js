let defaultRouter = [1, 2, 3, 4]
try {
  if (localStorage.router) {
    defaultRouter = localStorage.router
  }
} catch (e) {}

export default {
  state: {
    router: defaultRouter
  },
  mutations: {
    test (state) {
      state.router.push(10)
      try {
        localStorage.loginStatus = state.router
      } catch (e) {}
    }
  }
}
