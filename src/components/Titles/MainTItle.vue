<template>
  <h2 class="text-[1.5rem] font-bold text-left text-[#FFFFFF80] uppercase">
    {{ props.text }}
  </h2>
</template>
<script setup>
import { defineProps } from "vue";

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>
