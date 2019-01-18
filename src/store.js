import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navBarBGColor: {
      backgroundColor: '#F3CF50'
    },
    landingSeccion_1_BGColor: {
      backgroundColor: '#F3C250'
    },
    landingSeccion_2_BGColor: {
      backgroundColor: '#0097C3'
    },
    landingSeccion_3_BGColor: {
      backgroundColor: '#FFFFFF'
    },
    landingSeccion_4_BGColor: {
      backgroundColor: '#F3A250'
    },
    landingSeccion_5_BGColor: {
      backgroundColor: '#F3B250'
    }
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
    },
    getLandingSeccion_2_BGColor(state) {
      return state.landingSeccion_2_BGColor;
    },
    getLandingSeccion_3_BGColor(state) {
      return state.landingSeccion_3_BGColor;
    },
    getLandingSeccion_4_BGColor(state) {
      return state.landingSeccion_4_BGColor;
    },
    getLandingSeccion_5_BGColor(state) {
      return state.landingSeccion_5_BGColor;
    }
  }
})
