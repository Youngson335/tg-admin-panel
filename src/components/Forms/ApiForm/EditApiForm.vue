<template>
  <form
    @submit.prevent="updateEndpoint"
    class="p-4 rounded-[20px] w-[100%] bg-dark-gray"
  >
    <ApiNameInput v-model="activeEndpoint.name" id="endpointName" />
    <ApiKeyInput v-model="activeEndpoint.key" id="endpointKey" />

    <div class="flex items-center space-x-2 mb-[8px]">
      <LabelPost />
      <ApiLinkInput v-model="activeEndpoint.link" id="endpointLink" />
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
import { defineProps, defineEmits } from "vue";
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
    required: true,
  },
});

const updateEndpoint = () => {
  if (
    props.activeEndpoint.link !== "" &&
    props.activeEndpoint.name !== "" &&
    props.activeEndpoint.key !== ""
  ) {
    const updatedApi = {
      link: props.activeEndpoint.link,
      name: props.activeEndpoint.name,
      key: props.activeEndpoint.key,
    };
    store.dispatch("updateApiEndpoint", {
      id: props.activeEndpoint.id,
      updatedApi,
    });
    emit("closeForm");
    store.dispatch("updateSelectedApi", null);
  } else {
    return false;
  }
};

const deleteEndpoint = () => {
  store.dispatch("deleteApiEndpoint", props.activeEndpoint.id);
  emit("closeForm");
};
</script>
