<template>
  <main class="home my-container overflow-scroll h-[75vh]">
    <div v-if="newApi" class="home__form flex justify-center w-[100%]">
      <ApiForm />
    </div>

    <div v-if="activeEndpointId !== null">
      <EditApiForm :activeEndpoint="activeEndpoint" @closeForm="closeForm" />
    </div>

    <div v-if="activeEndpointId !== null">
      <div class="flex justify-between items center mb-[20px]">
        <p class="text-[1.5rem] font-bold text-left text-[#FFFFFF80] uppercase">
          Basic metrics
        </p>
        <RefreshBtn />
      </div>
      <UsersInfo :activeUserInfo="activeEndpoint.userInfo" />
      <EndpointsBlock :activeEndpoint="activeEndpoint" />
    </div>
  </main>
</template>

<script setup>
import ApiForm from "@/components/Forms/ApiForm.vue";
import EndpointsBlock from "@/components/Endpoint/EndpointsBlock.vue";
import UsersInfo from "@/components/UsersInfo/UsersInfo.vue";
import RefreshBtn from "@/components/Buttons/RefreshBtn.vue";
import EditApiForm from "@/components/Forms/EditApiForm.vue";
import { ref, computed, watch } from "vue";
import { useStore } from "vuex";

const store = useStore();
let getAPI = computed(() => store.getters["getApi"]);

const newApi = computed(() => store.getters["getNewApi"]);
const selectedApi = computed(() => store.getters["getSelectedApi"]);

let activeEndpointId = ref(null);
let activeEndpoint = ref(null);

const selectApi = (id) => {
  activeEndpoint.value = getAPI.value.find((api) => api.id === id);
  activeEndpointId.value = id;
};

const closeForm = () => {
  activeEndpointId.value = null;
};

watch(selectedApi, (newValue) => {
  if (newValue) {
    selectApi(newValue);
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
