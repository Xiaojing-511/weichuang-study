import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    curMenu: {
      name: '剧集',
      bgColor: '#f54d80',

    }
  },
  mutations: {
    setCurMenu(state,data){
      state.curMenu = data;
    }
  },
  
  getters: {


  },
  actions: {
  },
  modules: {
  }
})


