<template>
  <button
    type="button"
    class="delete-btn w-full bg-red-- text-[#FFFFFF] font-bold py-2 px-4 hover:bg-[#e1463a] text-sm rounded-[12px] py-4 px-4"
  >
    Delete
  </button>
</template>
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
