<template>
  <input
    placeholder="URL"
    type="text"
    class="bg-graphite py-[1rem] text-center rounded-[20px] text-white--"
    v-model="inputValue"
  />
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from "vue";

const props = defineProps({
  modelValue: String,
});

const emit = defineEmits(["update:modelValue"]);

const inputValue = ref(props.modelValue || "");

watch(inputValue, (newValue) => {
  emit("update:modelValue", newValue);
});
</script>
