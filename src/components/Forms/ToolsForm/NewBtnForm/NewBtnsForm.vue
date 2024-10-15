<template>
  <div class="py-[20px] px-[16px] max-w-[329px] m-auto">
    <div class="flex justify-between items-center mb-[13px]">
      <BtnTextInput v-model="text" />
      <BtnUrlInput v-model="url" />
    </div>
    <RemoveBtn @removeForm="removeForm" class="mb-[10px]" />
    <SaveNewBtn v-if="text !== '' && url !== ''" @click="saveForm" />
  </div>
  <Notification :notification="notificationState" v-if="notificationVisible" />
</template>

<script setup>
import { ref } from "vue";
import BtnUrlInput from "./Inputs/BtnUrlInput.vue";
import BtnTextInput from "./Inputs/BtnTextInput.vue";
import RemoveBtn from "./Btns/RemoveBtn.vue";
import SaveNewBtn from "./Btns/SaveNewBtn.vue";
import Notification from "@/components/Notification/Notification.vue";
import { useNotification } from "@/composables/Notification";

const { notificationState, notificationVisible, showNotification } =
  useNotification();

const props = defineProps({
  id: Number,
});

const emit = defineEmits(["removeForm", "saveForm"]);

const text = ref("");
const url = ref("");

const removeForm = () => {
  emit("removeForm", props.id);
};

const saveForm = () => {
  const formData = {
    id: props.id,
    text: text.value,
    url: url.value,
  };
  emit("saveForm", formData);
  showNotification("success", "Added new buttons");
};
</script>
