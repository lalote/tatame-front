import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navBarBGColor: {
      backgroundColor: '#0b2be2 !important'
    },
    //navBarBGColor : 'background-color: #F3C250 !important;',
    landingSeccion_1_BGColor : '#FFCCFF'
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    getNavBarBGColor(state) {
      return state.navBarBGColor;
    },
    getLandingSeccion_1_BGColor(state) {
      return state.landingSeccion_1_BGColor;
    }
  }
})
