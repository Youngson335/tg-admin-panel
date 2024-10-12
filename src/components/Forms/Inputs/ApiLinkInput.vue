<template>
  <input
    id="endpointLink"
    type="text"
    class="w-full bg-light-gray text-[#FFFFFF] border-0 rounded-[12px] py-4 px-4"
    placeholder="API URL"
    v-model="inputValue"
    @input="updateValue"
  />
</template>

<script setup>
import { ref, defineProps, defineEmits, watch } from "vue";

const props = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);

const inputValue = ref(props.modelValue);

watch(
  () => props.modelValue,
  (newValue) => {
    inputValue.value = newValue;
  }
);

const updateValue = () => {
  emit("update:modelValue", inputValue.value);
};
</script>
