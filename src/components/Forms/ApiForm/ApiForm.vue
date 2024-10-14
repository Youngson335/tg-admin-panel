<template>
  <form
    @submit.prevent="updateEndpoint"
    class="p-4 rounded-[20px] w-[100%] bg-dark-gray"
  >
    <ApiNameInput v-model="nameEndpoint" id="endpointName" />
    <ApiKeyInput v-model="keyEndpoint" id="endpointKey" />

    <div class="flex items-center space-x-2 mb-[8px]">
      <LabelGet />
      <ApiLinkInput v-model="linkEndpoint" id="endpointLink" />
    </div>

    <div class="space-y-2 mb-[8px]">
      <SaveBtn @click="saveEndpoint" />
    </div>
    <div class="space-y-2">
      <DeleteBtn v-if="linkEndpoint || nameEndpoint" @click="deleteEndpoint" />
    </div>
  </form>
</template>

<script setup>
import { ref, onMounted } from "vue";
import DeleteBtn from "./Buttons/DeleteBtn.vue";
import SaveBtn from "./Buttons/SaveBtn.vue";
import LabelGet from "./Labels/LabelGet.vue";
import ApiLinkInput from "./Inputs/ApiLinkInput.vue";
import ApiNameInput from "./Inputs/ApiNameInput.vue";
import ApiKeyInput from "./Inputs/ApiKeyInput.vue";
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();
const getAllApi = computed(() => store.getters["getApi"]);

const linkEndpoint = ref("");
const nameEndpoint = ref("");
const keyEndpoint = ref("");

const updateEndpoint = () => {};

const deleteEndpoint = () => {
  linkEndpoint.value = "";
  nameEndpoint.value = "";
  keyEndpoint.value = "";
  console.log("Endpoint deleted");
};

const saveEndpoint = () => {
  if (
    linkEndpoint.value !== "" &&
    nameEndpoint.value !== "" &&
    keyEndpoint.value !== ""
  ) {
    const newApi = {
      id: getAllApi.value.length + 1,
      name: nameEndpoint.value,
      link: linkEndpoint.value,
      key: keyEndpoint.value,
      userInfo: {
        totalUsers: "0",
        mauUsers: "0",
        dauUsers: "0",
      },
      tasks: [],
      lists: [],
    };

    store.dispatch("saveApiEndpoint", newApi);

    linkEndpoint.value = "";
    nameEndpoint.value = "";
    keyEndpoint.value = "";
  } else {
    return false;
  }
};
onMounted(() => {
  store.dispatch("loadApiFromLocalStorage");
});
</script>

<style scoped lang="scss">
form {
  & button {
    transition: all 0.4s ease;
    &:active {
      transition: all 0.4s ease;
      scale: 1.1;
    }
  }
}
</style>
