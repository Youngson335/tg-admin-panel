<template>
  <div
    ref="notificationRef"
    :class="['notification', isVisible ? '' : 'notification__hidden']"
    class="flex justify-start items-center p-[18px] rounded-[20px] bg-dark-gray fixed top-2 left-0 right-0 max-w-[361px] m-auto"
  >
    <div class="mr-[20px]">
      <img v-if="props.notification.type === 'error'" :src="errorIcon" alt="" />
      <img
        v-if="props.notification.type === 'success'"
        :src="successIcon"
        alt=""
      />
    </div>
    <div class="text-[12px] flex flex-col items-start">
      <p class="text-start">{{ props.notification.message }}</p>
      <p v-if="props.notification.err">
        {{ "{" + props.notification.err + "}" }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import errorIcon from "../../assets/icons/error-icon.svg";
import successIcon from "../../assets/icons/success-icon.svg";

const props = defineProps({
  notification: {
    type: Object,
    required: true,
  },
});

const isVisible = ref(true);

onMounted(() => {
  setTimeout(() => {
    isVisible.value = false;
  }, 3000);
});
</script>

<style lang="scss">
.notification {
  animation: showPlusY 0.5s ease forwards;

  @keyframes showPlusY {
    0% {
      opacity: 0;
      transform: translateY(-50px);
    }
    80% {
      transform: translateY(10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
}

.notification__hidden {
  animation: hidePlusY 0.5s ease forwards;

  @keyframes hidePlusY {
    0% {
      opacity: 1;
      transform: translateY(0px);
    }
    80% {
      transform: translateY(10px);
    }
    100% {
      opacity: 0;
    }
  }
}
</style>
