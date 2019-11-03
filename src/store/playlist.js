let defaultName = ''
let defaultImgUrl = ''
let defaultDescription = ''

try {
  defaultName = localStorage.playName
  defaultImgUrl = localStorage.playImg
  defaultDescription = localStorage.playDescription
} catch (e) {}

export default {
  state: {
    playName: defaultName,
    playImg: defaultImgUrl,
    playDescription: defaultDescription
  },
  mutations: {
    savePlaylist (state, data) {
      state.playName = data.playName
      state.playImg = data.playImg
      state.playDescription = data.playDescription
      try {
        localStorage.playName = state.playName
        localStorage.playImg = state.playImg
        localStorage.playDescription = state.playDescription
      } catch (e) {}
    }
  }
}
