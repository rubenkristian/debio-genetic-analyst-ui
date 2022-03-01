const defaultState ={
  selectedData: null,
  selectedAnalysisSerivice: null
}

export default {
  namespaced: true,
  state: {...defaultState},
  mutations: {
    SET_SELECTED_DATA(state, data){
      state.selectedData = data
    },

    SET_SELECTED_SERVICE(state, data){
      state.selectedAnalysisSerivice = data
    }
  },
  actions: {
    async getData({ commit }, data) {
      commit("SET_SELECTED_DATA", data)
    },

    async getSelectedAnalysisService({ commit }, data) {
      commit("SET_SELECTED_SERVICE", data)
    }
  }
}
