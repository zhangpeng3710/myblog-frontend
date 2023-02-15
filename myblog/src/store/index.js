import Vue from 'vue'
import Vuex from 'vuex'
import mdStore from './markdownStore'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    mdStore
  }
})
