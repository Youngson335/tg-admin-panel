<template>
  <div class="task-title text-start mb-[5px]">
    <h4>{{ title }}</h4>
  </div>
</template>
<script setup>
import { ref } from "vue";

defineProps({
  title: {
    type: String,
  },
});
</script>
