<template>
  <form
    @submit.prevent="updateEndpoint"
    class="p-4 rounded-[20px] w-[100%] bg-dark-gray"
  >
    <ApiNameInput v-model="nameEndpoint" id="endpointName" />

    <div class="flex items-center space-x-2 mb-[8px]">
      <LabelGet v-if="label === 1" @click="changeMethod('post', 0)" />
      <LabelPost v-if="label === 0" @click="changeMethod('get', 1)" />
      <ApiLinkInput v-model="linkEndpoint" id="endpointLink" />
    </div>

    <div class="space-y-2 mb-[8px]">
      <SaveBtn v-if="method === 'get'" @click="saveEndpoint" />
      <UpdateBtn v-else-if="method === 'post'" />
    </div>
    <div class="space-y-2">
      <DeleteBtn v-if="linkEndpoint || nameEndpoint" @click="deleteEndpoint" />
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";
import DeleteBtn from "./Buttons/DeleteBtn.vue";
import SaveBtn from "./Buttons/SaveBtn.vue";
import LabelGet from "./Labels/LabelGet.vue";
import ApiLinkInput from "./Inputs/ApiLinkInput.vue";
import ApiNameInput from "./Inputs/ApiNameInput.vue";
import LabelPost from "./Labels/LabelPost.vue";
import UpdateBtn from "./Buttons/UpdateBtn.vue";
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();
const getAllApi = computed(() => store.getters["getApi"]);

const linkEndpoint = ref("");
const nameEndpoint = ref("");
const label = ref(1);
const method = ref("get");

const changeMethod = (str, flag) => {
  method.value = str;
  label.value = flag;
};

const updateEndpoint = () => {};

const deleteEndpoint = () => {
  linkEndpoint.value = "";
  nameEndpoint.value = "";
  console.log("Endpoint deleted");
};

const saveEndpoint = () => {
  const newApi = {
    id: getAllApi.value.length + 1,
    title: nameEndpoint.value,
    link: linkEndpoint.value,
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
};
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
