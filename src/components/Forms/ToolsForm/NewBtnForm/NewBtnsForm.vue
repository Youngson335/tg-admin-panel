<template>
  <div class="py-[20px] px-[16px] max-w-[329px] m-auto">
    <div class="flex justify-between items-center mb-[13px]">
      <BtnTextInput v-model="text" />
      <BtnUrlInput v-model="url" />
    </div>
    <RemoveBtn @removeForm="removeForm" class="mb-[10px]" />
    <SaveNewBtn @click="saveForm" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import BtnUrlInput from "./Inputs/BtnUrlInput.vue";
import BtnTextInput from "./Inputs/BtnTextInput.vue";
import RemoveBtn from "./Btns/RemoveBtn.vue";
import SaveNewBtn from "./Btns/SaveNewBtn.vue";

const props = defineProps({
  id: Number,
});

const emit = defineEmits(["removeForm", "saveForm"]);

const text = ref("");
const url = ref("");

const removeForm = () => {
  emit("removeForm", props.id);
};

// Сохранение данных формы
const saveForm = () => {
  const formData = {
    text: text.value,
    url: url.value,
  };
  emit("saveForm", formData);
};
</script>
