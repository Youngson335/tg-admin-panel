<template>
  <div class="counter-list flex justify-between items-center p-4">
    <div class="counter-list__title">
      <p
        class="text-2xl font-bold leading-[29.05px] text-left text-[#FFFFFF80] uppercase"
      >
        active mailing lists
      </p>
    </div>
    <div
      class="counter-list__num text-2xl font-bold leading-[29.05px] text-left text-[#FFFFFF80] uppercase"
    >
      {{ listsLength }}
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";

const props = defineProps({
  listsLength: {
    type: Number,
  },
});
</script>
