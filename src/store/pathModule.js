export default {
	namespace: true,
	state: {
		currentPath: "",
	},
	getters: {
		getPath(state) {
			return state.currentPath
		},
	},
	mutations: {
		SET_PATH(state, payload) {
			state.currentPath = payload
		},
	},
	actions: {
		loadPath({ commit }, payload) {
			commit("SET_PATH", payload)
		},
	},
}
