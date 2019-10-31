export default {
  state: {
    id: null,
    nickname: '',
    city: '',
    signature: '',
    avatarUrl: '',
    followeds: '',
    follows: ''
  },
  mutations: {
    saveLoginInfo (state, userInfo) {
      state.id = userInfo.userid
      state.nickname = userInfo.nickname
      state.city = userInfo.city
      state.signature = userInfo.signature
      state.avatarUrl = userInfo.avatarUrl
      state.followeds = userInfo.followeds
      state.follows = userInfo.follows
      try {
        localStorage.id = state.id
        localStorage.name = state.nickname
        localStorage.city = state.city
        localStorage.signature = state.signature
        localStorage.avatarUrl = state.avatarUrl
        localStorage.followeds = state.followeds
        localStorage.follows = state.follows
      } catch (e) {}
    }
  }
}
