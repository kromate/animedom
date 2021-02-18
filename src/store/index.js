import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchArray:[]
  },
  mutations: {
    addsearchedRes(state, data){
      state.searchArray = data
    }
  },
  actions: {},
  modules: {}
});
