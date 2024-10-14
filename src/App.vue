<template>
  <Header @addApi="createEndpoint" @selectApi="selectApi" />

  <router-view />

  <div class="menu">
    <Menu />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import Menu from "./components/Menu/Menu.vue";
import Header from "./components/Header/Header.vue";
import { useStore } from "vuex";

const store = useStore();

const createEndpoint = () => {
  store.dispatch("updateSelectedApi", null);
  store.dispatch("addNewApi", true);
};

const selectApi = (id) => {
  store.dispatch("updateSelectedApi", id);
  console.log(id);
};

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
