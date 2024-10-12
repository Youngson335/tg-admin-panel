import { createStore } from "vuex";

export default createStore({
  state: {
    api: [],
    newApi: false,
    selectedApi: null,
  },
  mutations: {
    addApiEndpoint(state, newApi) {
      state.api.push(newApi);
    },
    updateApiEndpoint(state, { id, updatedApi }) {
      const index = state.api.findIndex((api) => api.id === id);
      if (index !== -1) {
        state.api[index] = { ...state.api[index], ...updatedApi };
      }
    },
    deleteApiEndpoint(state, id) {
      state.api = state.api.filter((api) => api.id !== id);
    },
    createNewApi(state, flag) {
      state.newApi = flag;
    },
    writeSelectApi(state, id) {
      state.selectedApi = id;
    },
    setApi(state, api) {
      state.api = api;
    },
  },
  actions: {
    saveApiEndpoint({ commit }, newApi) {
      commit("addApiEndpoint", newApi);
      localStorage.setItem("apiEndpoints", JSON.stringify(this.state.api));
    },
    updateApiEndpoint({ commit }, { id, updatedApi }) {
      commit("updateApiEndpoint", { id, updatedApi });
      localStorage.setItem("apiEndpoints", JSON.stringify(this.state.api));
    },
    deleteApiEndpoint({ commit }, id) {
      commit("deleteApiEndpoint", id);
      localStorage.setItem("apiEndpoints", JSON.stringify(this.state.api));
    },
    addNewApi({ commit }, flag) {
      commit("createNewApi", flag);
    },
    updateSelectedApi({ commit }, id) {
      commit("writeSelectApi", id);
    },
    loadApiFromLocalStorage({ commit }) {
      const apiFromLocalStorage = localStorage.getItem("apiEndpoints");
      if (apiFromLocalStorage) {
        const parsedApi = JSON.parse(apiFromLocalStorage);
        commit("setApi", parsedApi);
      }
    },
  },
  getters: {
    getApi(state) {
      return state.api;
    },
    getNewApi(state) {
      return state.newApi;
    },
    getSelectedApi(state) {
      return state.selectedApi;
    },
  },
  modules: {},
});
