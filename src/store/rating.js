import { getRatingService, getRatingLab } from "@/common/lib/api"

const defaultState = {
  labRate: null,
  serviceRate: null
}

export default {
  namespaced: true,

  state: {
    ...defaultState
  },

  mutations: {
    SET_LAB_RATE(state, rate) {
      state.labRate = rate
    },

    SET_SERVICE_RATE(state, rate) {
      state.serviceRate = rate
    }
  },
  actions: {
    async getLabRate({ commit }, address ) {
      const rate = await getRatingLab(address)
      commit("SET_LAB_RATE", rate)
      return rate
    },

    async getServiceRate({ commit }, id) {
      const rate = await getRatingService(id)

      commit("SET_SERVICE_RATE", rate.data)
      return rate
    }
  },

  getters: {
    getLabRate(state) {
      return state.labRate
    },

    getServiceRate(state) {
      return state.serviceRate
    }
  }
}
