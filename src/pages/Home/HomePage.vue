<template>
  <Header @addApi="createEndpoint" @selectApi="selectApi" />
  <main class="home my-container overflow-scroll h-[75vh]">
    <div v-if="newApi" class="home__form flex justify-center w-[100%]">
      <ApiForm />
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
import Header from "@/components/Header/Header.vue";
import UsersInfo from "@/components/UsersInfo/UsersInfo.vue";
import RefreshBtn from "@/components/Buttons/RefreshBtn.vue";
import { ref, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
let getAPI = computed(() => store.getters["getApi"]);

let newApi = ref(false);
let activeEndpointId = ref(null);
let activeEndpoint = ref(null);

const createEndpoint = () => {
  newApi.value = !newApi.value;
  console.log("create api");
};

const selectApi = (id) => {
  activeEndpoint.value = getAPI.value.find((api) => api.id === id);
  activeEndpointId.value = id;
  console.log(id);
};
</script>

<style lang="scss">
.home {
  &__form {
    animation: showMinusY 0.5s ease;
  }
}
</style>
