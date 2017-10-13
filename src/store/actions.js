import axios from 'axios'
export const actions = {
  getMoving ({commit, state}) {
    axios.get('/api/movie/in_theaters?city=福州')
    .then(function (response) {
      commit('SET_MOVINGLIST', {list: response.data.subjects})
    })
    .catch(function (error) {
      console.log(error)
    })
  },
  setTop ({commit, state}, page) {
    let oldList = state.topList
    axios.get('/api/movie/top250?count=12', {
      params: {
        start: page * 12
      }
    })
    .then(function (response) {
      commit('SET_TOPLIST', {list: oldList.concat(response.data.subjects)})
    })
    .catch(function (error) {
      console.log(error)
    })
  },
  setStart ({commit, state}, page) {
    commit('SET_TOPSTART', {page: page})
  }
}
