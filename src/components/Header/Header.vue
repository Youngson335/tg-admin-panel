<template>
  <header class="header my-container flex justify-center items-center p-5">
    <div class="flex max-w-[200px] overflow-hidden overflow-x-scroll">
      <EndpointName
        class="endpoint ml-[5px]"
        v-for="api in getApiNames"
        :key="api.id"
        :api="api"
        @click="selectEndpoint(api.id)"
        :class="{ endpoint__active: activeApiId === api.id }"
      />
    </div>
    <div class="header__btn ml-[8px]">
      <AddApiBtn @addApi="createEndpoint" />
    </div>
  </header>
</template>

<script setup>
import AddApiBtn from "../Buttons/AddApiBtn.vue";
import EndpointName from "../Endpoint/EndpointName.vue";
import { computed, defineEmits, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();
const emit = defineEmits(["addApi", "selectApi"]);

const activeApiId = computed(() => store.getters["getSelectedApi"]);

const createEndpoint = () => {
  emit("addApi");
  const newApiId = store.state.apiIdCounter + 1;
  store.commit("writeSelectApi", newApiId);
};

const selectEndpoint = (id) => {
  emit("selectApi", id);
  store.dispatch("addNewApi", false);
  store.commit("writeSelectApi", id);
  store.commit("writeActiveApi", id);
};

const getApiNames = computed(() => store.getters["getApi"]);
</script>

<style lang="scss">
.endpoint {
  animation: showBlurItem 0.5s ease;
  @keyframes showBlurItem {
    0% {
      filter: blur(3px);
      opacity: 0.3;
      transform: translateY(50px);
    }
    70% {
      transform: translateY(-10px);
    }
    100% {
      filter: blur(0px);
      opacity: 1;
      transform: translateY(0px);
    }
  }
  &__active {
    background-color: #ff5722;
  }
}
</style>
