import Vue from "vue";
import Vuex from "vuex";
import appNavState from "./modules/appNavState";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    appNavState,
  },
});
