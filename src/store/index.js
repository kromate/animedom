import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchArray: [],
    desc: null
  },
  mutations: {
    addsearchedRes(state, data) {
      state.searchArray = data;
    },
    updateDesc(state, data) {
      state.desc = data;
    }
  },
  actions: {},
  modules: {}
});
