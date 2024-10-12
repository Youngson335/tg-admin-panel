<template>
  <div>
    <p class="text-xs font-medium leading-[14.52px] text-left">{{ message }}</p>
  </div>
</template>
<script setup>
defineProps({
  message: {
    type: String,
  },
});
</script>
<style lang=""></style>
