import { createStore } from "vuex";

export default createStore({
  state: {
    api: [],
    newApi: false,
    selectedApi: null,
    apiIdCounter: 0,
    apiEndpoint: {},
    activeApi: null,
  },
  mutations: {
    addApiEndpoint(state, newApi) {
      state.api.push(newApi);
      state.apiIdCounter++;
    },
    addButtonToApiEndpoint(state, newButton) {
      if (!state.apiEndpoint.buttons) {
        state.apiEndpoint.buttons = [];
      }
      state.apiEndpoint.buttons.push(newButton);
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
    setApiIdCounter(state, counter) {
      state.apiIdCounter = counter;
    },
    addTestUsers(state, testUsers) {
      Object.assign(state.apiEndpoint, testUsers);
    },
    addUserToTestUsers(state, chatId) {
      if (!state.apiEndpoint.testUsers) {
        state.apiEndpoint.testUsers = [];
      }
      state.apiEndpoint.testUsers.push({ chat_id: chatId });
    },
    removeTestUser(state, userID) {
      state.apiEndpoint.testUsers = state.apiEndpoint.testUsers.filter(
        (user) => user.chat_id !== userID
      );
    },
    removeButtonFromApiEndpoint(state, buttonId) {
      if (state.apiEndpoint.buttons) {
        state.apiEndpoint.buttons = state.apiEndpoint.buttons.filter(
          (button) => button.id !== buttonId
        );
      }
    },
    setMessageText(state, messageText) {
      state.apiEndpoint.messageText = messageText;
    },
    writeActiveApi(state, id) {
      state.activeApi = state.api.find((api) => api.id === id);
    },
  },
  actions: {
    saveApiEndpoint({ commit, state }, newApi) {
      const apiWithId = { ...newApi, id: state.apiIdCounter + 1 };
      commit("addApiEndpoint", apiWithId);
      localStorage.setItem("apiEndpoints", JSON.stringify(state.api));
      localStorage.setItem("apiIdCounter", state.apiIdCounter);
    },
    updateApiEndpoint({ commit, state }, { id, updatedApi }) {
      commit("updateApiEndpoint", { id, updatedApi });
      localStorage.setItem("apiEndpoints", JSON.stringify(state.api));
    },
    deleteApiEndpoint({ commit, state }, id) {
      commit("deleteApiEndpoint", id);
      localStorage.setItem("apiEndpoints", JSON.stringify(state.api));
    },
    addNewApi({ commit }, flag) {
      commit("createNewApi", flag);
    },
    updateSelectedApi({ commit, state }, id) {
      commit("writeSelectApi", id);
    },
    loadApiFromLocalStorage({ commit }) {
      const apiFromLocalStorage = localStorage.getItem("apiEndpoints");
      const idCounterFromLocalStorage = localStorage.getItem("apiIdCounter");

      if (apiFromLocalStorage) {
        const parsedApi = JSON.parse(apiFromLocalStorage);
        commit("setApi", parsedApi);

        if (parsedApi.length > 0) {
          commit("writeSelectApi", parsedApi[0].id);
          commit("writeActiveApi", parsedApi[0].id);
        }
      }

      if (idCounterFromLocalStorage) {
        const parsedCounter = parseInt(idCounterFromLocalStorage, 10);
        commit("setApiIdCounter", parsedCounter);
      }
    },

    saveApiEndpoint({ commit, state }, newApi) {
      const apiWithId = { ...newApi, id: state.apiIdCounter + 1 };
      commit("addApiEndpoint", apiWithId);
      localStorage.setItem("apiEndpoints", JSON.stringify(state.api));
      localStorage.setItem("apiIdCounter", state.apiIdCounter);

      commit("writeSelectApi", apiWithId.id);
    },
    saveMessageText({ commit }, messageText) {
      commit("setMessageText", messageText);
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
    getActiveApi(state) {
      return state.activeApi;
    },
    getApiData(state) {
      return state.apiEndpoint;
    },
  },
  modules: {},
});
