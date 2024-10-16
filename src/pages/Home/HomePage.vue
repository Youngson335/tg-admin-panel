<template>
  <main
    class="home my-container overflow-scroll h-full"
    v-if="activeEndpoint !== undefined && activeEndpoint !== null"
  >
    <div>
      <div class="flex justify-between items center mb-[20px]">
        <MainTItle :text="'Basic metrics'" />
        <RefreshBtn />
      </div>
      <UsersInfo :activeUserInfo="activeEndpoint.userInfo" />
      <EndpointsBlock :activeEndpoint="activeEndpoint" />
    </div>
  </main>
  <NotConnected v-if="apiLength === 0 && selectedApi === null" />
</template>

<script setup>
import EndpointsBlock from "@/components/Endpoint/EndpointsBlock.vue";
import UsersInfo from "@/components/UsersInfo/UsersInfo.vue";
import RefreshBtn from "@/components/Buttons/RefreshBtn.vue";
import MainTItle from "@/components/Titles/MainTItle.vue";
import { ref, computed, watch, onMounted, inject } from "vue";
import { useStore } from "vuex";
import { defineEmits } from "vue";
import NotConnected from "../NotConnected/NotConnected.vue";

const store = useStore();
const emit = defineEmits(["setInfoEndpoint"]);

let getAPI = computed(() => store.getters["getApi"]);
const selectedApi = computed(() => store.getters["getSelectedApi"]);

const apiLength = computed(() => store.getters["getApi"].length);

let activeEndpointId = ref(null);
let activeEndpoint = ref(null);
let activeApi = computed(() => store.getters["getActiveApi"]);

const selectApi = (id) => {
  activeEndpoint.value = getAPI.value.find((api) => api.id === id);
  activeEndpointId.value = id;

  emit("setInfoEndpoint", activeEndpointId.value);
};

watch(selectedApi, (newValue) => {
  if (newValue) {
    selectApi(newValue);
  }
  if (newValue === null) {
    activeEndpointId.value = null;
  }
});
onMounted(() => {
  if (activeApi.value) {
    selectApi(activeApi.value.id);
  }
});
</script>

<style lang="scss">
.home {
  &__form {
    animation: showMinusY 0.5s ease;
  }
}
</style>
