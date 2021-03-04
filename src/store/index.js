import Vue from "vue"
import Vuex from "vuex"
import pathModule from "./pathModule"

Vue.use(Vuex)

export default new Vuex.Store({
	modules: { pathModule },
})
