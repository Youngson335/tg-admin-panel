<template>
  <div class="task-reward text-start mb-[5px]">
    <h5>
      Reward: <span class="text-yellow--">{{ reward }}</span>
    </h5>
  </div>
</template>
<script setup>
defineProps({
  reward: {
    type: String,
  },
});
</script>
<style lang=""></style>
