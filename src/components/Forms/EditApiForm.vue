<template>
  <form
    @submit.prevent="updateEndpoint"
    class="p-4 rounded-[20px] w-[100%] bg-dark-gray"
  >
    <ApiNameInput v-model="nameEndpoint" id="endpointName" />
    <ApiKeyInput v-model="keyEndpoint" id="endpointKey" />

    <div class="flex items-center space-x-2 mb-[8px]">
      <LabelPost />
      <ApiLinkInput v-model="linkEndpoint" id="endpointLink" />
    </div>

    <div class="space-y-2 mb-[8px]">
      <UpdateBtn @click="updateEndpoint" />
    </div>
    <div class="space-y-2">
      <DeleteBtn @click="deleteEndpoint" />
    </div>
  </form>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";
import { useStore } from "vuex";
import DeleteBtn from "./Buttons/DeleteBtn.vue";
import UpdateBtn from "./Buttons/UpdateBtn.vue";
import LabelPost from "./Labels/LabelPost.vue";
import ApiLinkInput from "./Inputs/ApiLinkInput.vue";
import ApiNameInput from "./Inputs/ApiNameInput.vue";
import ApiKeyInput from "./Inputs/ApiKeyInput.vue";

const store = useStore();
const emit = defineEmits(["closeForm"]);

const props = defineProps({
  activeEndpoint: {
    type: Object,
  },
});

const linkEndpoint = ref(props.activeEndpoint.link);
const nameEndpoint = ref(props.activeEndpoint.name);
const keyEndpoint = ref(props.activeEndpoint.key);
const apiId = props.activeEndpoint.id;

const updateEndpoint = () => {
  const updatedApi = {
    link: linkEndpoint.value,
    name: nameEndpoint.value,
    key: keyEndpoint.value,
  };
  store.dispatch("updateApiEndpoint", { id: apiId, updatedApi });
  emit("closeForm");
};

const deleteEndpoint = () => {
  store.dispatch("deleteApiEndpoint", apiId);
  emit("closeForm");
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
