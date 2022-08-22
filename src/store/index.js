import { createStore } from 'vuex'

const moduleA = {
  state: { },
  getters: { },
  mutations: {},
  actions: {}
}

export default createStore({
  // state: {
  //   username: 'zs'
  // },

  // getters: {
  //   newName (state) {
  //     console.log('state', state)
  //     return state.username + '!!!!'
  //   }
  // },
  // mutations: {
  //   updataName (state, payload) {
  //     state.username = payload
  //   }
  // },
  // actions: {
  //   updataName (context) {
  //     setTimeout(() => { context.commit('updataName', 'lala') }, 1000)
  //   }
  // },
  modules: {
    moduleA
  }
})
