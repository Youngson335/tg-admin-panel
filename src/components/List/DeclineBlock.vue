<template>
  <div class="decline-block flex justify-center items-center">
    <DeclineBtn />
    <DeclineStatus />
  </div>
</template>
<script setup>
import DeclineBtn from "../Buttons/DeclineBtn.vue";
import DeclineStatus from "./DeclineStatus.vue";
</script>
<style lang="scss">
.decline-block {
  animation: showBlurElement 0.6s ease;
  @keyframes showBlurElement {
    0% {
      opacity: 0;
      filter: blur(3px);
    }
    100% {
      opacity: 1;
      filter: blur(0px);
    }
  }
}
</style>
