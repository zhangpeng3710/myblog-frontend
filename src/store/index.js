import Vue from 'vue'
import Vuex from 'vuex'
import mdStore from './markdownStore'
import commonStore from './common'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    mdStore,
    commonStore,
  }
})
