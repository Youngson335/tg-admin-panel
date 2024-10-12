<template>
  <div
    v-if="img === null"
    class="p-[30px] bg-light-gray max-w-[90px] text-center h-[90px] flex justify-center items-center rounded-[16px] leading-5 mr-[16px]"
  >
    <p>NOT IMAGE</p>
  </div>
</template>
<script setup>
defineProps({
  img: {
    type: [String, null],
  },
});
</script>
<style lang=""></style>
