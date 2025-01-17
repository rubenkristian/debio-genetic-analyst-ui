import localStorage from "@/common/lib/local-storage"
import getEnv from "../common/lib/utils/env"

const defaultState = {
  role: null,
  configApp: null,
  loadingData: null,
  account: null
}

export default {
  namespaced: true,

  state: {
    ...defaultState
  },

  mutations: {
    SET_ROLE(state, role) {
      state.role = role
    },

    SET_CONFIG(state, data) {
      state.configApp = data
    },

    SET_LOADING(state, data) {
      state.loadingData = data
    },

    CLEAR(state) {
      state.role = defaultState.role
    },

    SET_ACCOUNT(state, data) {
      state.account = data
    }
  },

  actions: {
    async initApp({ commit }) {
      const substrateWs = getEnv("VUE_APP_DEBIO_SUBSTRATE_WS")
      const web3Rpc = getEnv("VUE_APP_WEB3_RPC")

      const configApp = {
        substrateWs,
        web3Rpc
      }
      commit("SET_CONFIG", configApp)
    },

    async getRole({ commit, rootGetters }) {
      try {
        let keystore = localStorage.getKeystore()
        keystore = JSON.parse(keystore)
        const accountContract = rootGetters["ethereum/contracts/getAccountContract"]
        let role = await accountContract.methods.myRole().call({ from: keystore.address })
        console.log("In Get Role: ", role)
        if (role == "") role = "customer"
        commit("SET_ROLE", role)

      } catch (err) {
        commit("SET_ROLE", null)
        throw new Error("Error on getting role from account Contract ", err.message)
      }
    },

    clearAuth({ commit }) {
      localStorage.removeAddress()
      commit("CLEAR")
    }
  },

  getters: {
    getRole(state) {
      return state.role
    },

    getConfig(state) {
      return state.configApp
    },

    getLoading(state) {
      return state.loadingData
    }

  }
}
