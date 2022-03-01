const ERC20Interface = require("./abi/ERC20Interface.json")
const Escrow = require("./abi/Escrow.json")

import store from "@/store/index"

const defaultState = {
  contractERC20Interface: null,
  contractEscrow: null
}

export default {
  namespaced: true,
  state: {
    ...defaultState
  },
  
  mutations: {
    SET_CONTRACT_ERC20Interface(state, contractERC20Interface) {
      state.contractERC20Interface = contractERC20Interface
    },
    SET_CONTRACT_Escrow(state, contractEscrow) {
      state.contractEscrow = contractEscrow
    }
  },

  actions: {
    initContracts({ commit, rootState }) {
      const { web3 } = rootState.metamask
      const EscrowContract = new web3.eth.Contract(Escrow.abi, process.env.VUE_APP_DEBIO_ESCROW_ETH_ADDRESS)

      let ERC20InterfaceContract
      const coinName = store.getters["auth/getConfig"].tokenName
      let contractAddress = ""
      switch (coinName) {
      case "DAI":
        contractAddress = process.env.VUE_APP_DEBIO_DAI_TOKEN_ADDRESS
        break
      default:
        contractAddress = process.env.VUE_APP_DEBIO_ERC20_INTERFACE_ADDRESS
        break
      }
      ERC20InterfaceContract = new web3.eth.Contract(ERC20Interface, contractAddress)

      commit("SET_CONTRACT_ERC20Interface", ERC20InterfaceContract)
      commit("SET_CONTRACT_Escrow", EscrowContract)
    }
  },

  getters: {
    getERC20InterfaceContract(state) {
      return state.contractERC20Interface
    },
    getEscrowContract(state) {
      return state.contractEscrow
    }
  }
}
