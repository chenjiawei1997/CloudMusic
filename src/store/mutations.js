import types from "./mutation-types.js"
export default {

  [types.SET_PLAY_STATE](state, val) {
    state.playState = val;
  },
  [types.SET_PLAY_URL](state, val) {
    state.playUrl = val;
  },
  [types.SET_PLAY_INDEX](state, val) {
    state.playIndex = val;
  },
  [types.SET_PLAY_LIST](state, val) {
    state.playlist = val;
  },
  [types.SET_PLAY_LIST_SHOW](state, val) {
    state.playlistShow = val;
  },
  [types.SET_PLAY_SEQUENCE](state, val) {
    state.playSequence = val;
  },


  [types.SET_CURRENTSONG](state, val) {
    state.currentSong = val;
  },
  [types.SET_CURRENTTIME](state, val) {
    state.currentTime = val;
  },
  [types.SET_DURATION](state, val) {
    state.duration = val;
  },


}