import * as types from './types'
export const mutations = {
  [types.SET_MOVINGLIST] (state, {list}) {
    state.movingList = list
  },
  [types.SET_TOPLIST] (state, {list}) {
    state.topList = list
  },
  [types.SET_TOPSTART] (state, {page}) {
    state.topStart = page
  }
}
