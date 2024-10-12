<template>
  <div class="counter-tasks flex justify-between items-center p-4">
    <div class="counter-tasks__title">
      <p
        class="text-2xl font-bold leading-[29.05px] text-left text-[#FFFFFF80] uppercase"
      >
        Recent task
      </p>
    </div>
    <div
      class="counter-tasks__num text-2xl font-bold leading-[29.05px] text-left text-[#FFFFFF80] uppercase"
    >
      {{ tasksLength }}
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  tasksLength: {
    type: Number,
  },
});
</script>

<style lang=""></style>
