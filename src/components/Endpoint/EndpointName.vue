<template>
  <div
    class="uppercase p-[8px] rounded-[50%] border-red-- border-solid border-2 flex justify-center items-center w-[45px] h-[45px]"
  >
    {{ apiName }}
  </div>
</template>
<script setup>
import { defineProps } from "vue";

const props = defineProps({
  api: {
    type: Object,
  },
});

const words = props.api.title.split(" ");

const apiName = words
  .slice(0, 2)
  .map((word) => word.slice(0, 1))
  .join("");

console.log(apiName);
</script>
<style lang="">
/* border: 2px solid #FF5722 */
</style>
