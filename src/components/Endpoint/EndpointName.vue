<template>
  <div
    class="uppercase p-[8px] rounded-[50%] border-red-- border-solid border-2 flex justify-center items-center w-[45px] h-[45px]"
  >
    {{ apiName }}
  </div>
</template>

<script setup>
import { defineProps, ref, watch } from "vue";

const props = defineProps({
  api: {
    type: Object,
  },
});

const apiName = ref("");

watch(
  () => props.api.name,
  (newTitle) => {
    if (newTitle) {
      const words = newTitle.split(" ");
      apiName.value = words
        .slice(0, 2)
        .map((word) => word.slice(0, 1))
        .join("");
    } else {
      apiName.value = "";
    }
  },
  { immediate: true }
);
</script>
