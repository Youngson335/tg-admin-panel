<template>
  <div class="refresh-btn relative">
    <Loader v-if="loader" />
    <button
      @click="updateInfo"
      class="refresh_btn bg-light-blue rounded-[12px] py-2 px-4 w-[100%] max-w-[116px]"
    >
      REFRESH
    </button>
  </div>
</template>
<script setup>
import { ref } from "vue";
import Loader from "../Loader/Loader.vue";

const loader = ref(false);

const updateInfo = () => {
  console.log(loader.value);
  loader.value = true;
  setTimeout(() => {
    loader.value = false;
  }, 1000);
};
</script>
