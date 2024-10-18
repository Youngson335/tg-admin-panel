<template>
  <form
    @submit.prevent="updateEndpoint"
    class="p-4 rounded-[20px] w-[100%] bg-dark-gray"
  >
    <ApiNameInput v-model="activeEndpoint.name" id="endpointName" />
    <ApiKeyInput v-model="activeEndpoint.key" id="endpointKey" />

    <div class="flex items-center space-x-2 mb-[8px]">
      <LabelPost
        v-if="typeRequest == 'post'"
        @click="selectTypeRequest('get')"
      />
      <LabelGet
        v-if="typeRequest == 'get'"
        @click="selectTypeRequest('post')"
      />
      <ApiLinkInput v-model="activeEndpoint.link" id="endpointLink" />
    </div>

    <div class="space-y-2 mb-[8px]">
      <UpdateBtn @click="updateEndpoint" />
    </div>
    <div class="space-y-2">
      <DeleteBtn @click="deleteEndpoint" />
    </div>
  </form>

  <Notification :notification="notificationState" v-if="notificationVisible" />
</template>

<script setup>
import { defineProps, defineEmits, computed } from "vue";
import { useStore } from "vuex";
import DeleteBtn from "./Buttons/DeleteBtn.vue";
import UpdateBtn from "./Buttons/UpdateBtn.vue";
import LabelPost from "./Labels/LabelPost.vue";
import LabelGet from "./Labels/LabelGet.vue";
import ApiLinkInput from "./Inputs/ApiLinkInput.vue";
import ApiNameInput from "./Inputs/ApiNameInput.vue";
import ApiKeyInput from "./Inputs/ApiKeyInput.vue";
import Notification from "@/components/Notification/Notification.vue";
import { useNotification } from "@/composables/Notification";

const { notificationState, notificationVisible, showNotification } =
  useNotification();

const store = useStore();
const emit = defineEmits(["closeForm"]);

const props = defineProps({
  activeEndpoint: {
    type: Object,
    required: true,
  },
});

const typeRequest = computed({
  get: () => props.activeEndpoint.request,
  set: (value) => {
    props.activeEndpoint.request = value;
  },
});

const selectTypeRequest = (type) => {
  typeRequest.value = type;
  console.log("Selected typeRequest:", typeRequest.value);
};

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
      request: typeRequest.value,
    };
    store.dispatch("updateApiEndpoint", {
      id: props.activeEndpoint.id,
      updatedApi,
    });
  } else {
    return false;
  }
  showNotification("success", "update info api");
};

const deleteEndpoint = () => {
  store.dispatch("deleteApiEndpoint", props.activeEndpoint.id);
  emit("closeForm");
};
</script>
