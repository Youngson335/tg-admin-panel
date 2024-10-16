<template>
  <div class="my-container overflow-scroll h-full">
    <Header @addApi="createEndpoint" @selectApi="selectApi" />

    <div v-if="newApi" class="home__form flex justify-center w-[100%]">
      <ApiForm />
    </div>

    <div v-if="activeApi">
      <EditApiForm :activeEndpoint="activeApi" />
    </div>

    <router-view @setInfoEndpoint="setInfoEndpoint" />

    <div class="menu">
      <Menu />
    </div>
  </div>
</template>

<script setup>
import { onMounted, provide, computed, ref } from "vue";
import Menu from "./components/Menu/Menu.vue";
import Header from "./components/Header/Header.vue";
import ApiForm from "./components/Forms/ApiForm/ApiForm.vue";
import EditApiForm from "./components/Forms/ApiForm/EditApiForm.vue";
import { useStore } from "vuex";

const store = useStore();

let getApi = computed(() => store.getters["getApi"]);

let activeApi = computed(() => store.getters["getActiveApi"]);

const apiLength = getApi.value.length;

const newApi = computed(() => store.getters["getNewApi"]);
provide("newApi", newApi);

const createEndpoint = () => {
  if (newApi.value === false) {
    // store.commit("removeActiveApi");
    store.dispatch("addNewApi", true);
  } else {
    store.dispatch("addNewApi", false);
  }
};

const selectApi = (id) => {
  store.dispatch("updateSelectedApi", id);
};

let activeEndpointId = ref(null);

const setInfoEndpoint = (item) => {
  activeEndpointId.value = item;
};

onMounted(() => {
  store.dispatch("loadApiFromLocalStorage").then(() => {
    const apiList = getApi.value;
    if (apiList.length > 0) {
      if (newApi.value === true) {
        store.dispatch("updateSelectedApi", null);
      }
      store.dispatch("updateSelectedApi", apiList[0].id);
    }
  });
});

//применение стилей к браузеру
const body = document.getElementsByTagName("body")[0];
onMounted(() => {
  if (Object.keys(window.Telegram.WebApp.themeParams).length !== 0) {
    return true;
  } else {
    body.style.background = "#111111";
    console.log("not ok");
  }
});
</script>
<style lang="scss">
#app {
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  position: relative;
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
}

.menu {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
.my-container {
  max-width: 393px;
  margin: 0 auto;
  padding: 5px;
}
</style>
