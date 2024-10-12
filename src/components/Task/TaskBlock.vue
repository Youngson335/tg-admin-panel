<template>
  <div class="task-block">
    <Task v-for="task in tasks" :key="task.id" :task="task" />
  </div>
</template>

<script setup>
import Task from "./Task.vue";
import { defineProps } from "vue";

const props = defineProps({
  tasks: {
    type: Object,
  },
});
</script>
