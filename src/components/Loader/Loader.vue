<template>
  <div
    class="loader flex justify-center items-center bg-light-blue rounded-[12px] py-2 px-4 w-[100%] max-w-[116px] h-full absolute top-0 right-0 left-0 m-auto"
  >
    <img
      src="../../assets/icons/loader-icon.svg"
      alt="Загрузка"
      class="loader-icon"
    />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@starting-style {
  .loader {
    & img {
      opacity: 0;
    }
  }
}
.loader {
  & img {
    transition: all 0.4s ease;
    animation: loader 1s linear infinite;
  }
}

@keyframes loader {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
