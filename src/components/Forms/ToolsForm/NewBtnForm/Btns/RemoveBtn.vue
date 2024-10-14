<template>
  <button
    type="button"
    class="delete-btn w-full bg-red-remove text-[#FFFFFF] font-bold py-[1rem] px-4 hover:bg-[#e1463a] text-sm rounded-[20px] py-4 px-4"
    @click="removeForm"
  >
    Remove
  </button>
</template>

<script setup>
const emit = defineEmits(["removeForm"]);

const removeForm = () => {
  emit("removeForm");
};
</script>

<style lang="scss">
.delete-btn {
  animation: showMinusY 0.5s ease;
  @keyframes showMinusY {
    0% {
      transform: translateY(30px);
      opacity: 0;
    }
    100% {
      transform: translateY(0px);
      opacity: 1;
    }
  }
}
</style>
