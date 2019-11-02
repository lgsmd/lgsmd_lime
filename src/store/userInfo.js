let defaultId = null
let defaultNickname = ''
let defaultCity = ''
let defaultSignature = ''
let defaultAvatarUrl = ''
let defaultFolloweds = null
let defaultFollows = null
let defaultPlaylists = [{id: 1, name: 'loading...', coverImgUrl: ''}]

try {
  defaultId = localStorage.userId
  defaultNickname = localStorage.nickname
  defaultCity = localStorage.city
  defaultSignature = localStorage.signature
  defaultAvatarUrl = localStorage.avatarUrl
  defaultFolloweds = localStorage.followeds
  defaultFollows = localStorage.follows
  if (localStorage.playlists) {
    defaultPlaylists = JSON.parse(localStorage.playlists)
  }
} catch (e) {}

export default {
  state: {
    userId: defaultId,
    nickname: defaultNickname,
    city: defaultCity,
    signature: defaultSignature,
    avatarUrl: defaultAvatarUrl,
    followeds: defaultFolloweds,
    follows: defaultFollows,
    playlists: defaultPlaylists
  },
  mutations: {
    saveLoginInfo (state, userInfo) {
      state.userId = userInfo.userId
      state.nickname = userInfo.nickname
      state.city = userInfo.city
      state.signature = userInfo.signature
      state.avatarUrl = userInfo.avatarUrl
      state.followeds = userInfo.followeds
      state.follows = userInfo.follows
      try {
        localStorage.userId = state.userId
        localStorage.nickname = state.nickname
        localStorage.city = state.city
        localStorage.signature = state.signature
        localStorage.avatarUrl = state.avatarUrl
        localStorage.followeds = state.followeds
        localStorage.follows = state.follows
      } catch (e) {}
    },
    updatePlaylists (state, playlists) {
      state.playlists = playlists
      try {
        localStorage.playlists = JSON.stringify(state.playlists)
      } catch (e) {}
    }
  }
}
