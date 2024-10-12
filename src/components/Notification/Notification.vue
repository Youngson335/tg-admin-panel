<template>
  <div
    ref="notificationRef"
    class="notification flex justify-center items-center py-[18px] px-[26px] rounded-[20px] bg-dark-gray absolute top-2 left-0 right-0"
  >
    <div class="mr-[20px]">
      <img :src="img" alt="" />
    </div>
    <div>
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, watch, onMounted } from "vue";
import errorIcon from "../../assets/icons/error-icon.svg";

const props = defineProps({
  state: {
    type: Boolean,
  },
  text: {
    type: String,
  },
});

const stateNotification = (obj) => {
  let message = obj.message;
  let img = obj.img;
  let text = obj.text;
  return {
    message,
    img,
    text,
  };
};

const error = {
  message: "Error message",
  img: errorIcon,
  text: props.text,
};

const done = {
  message: "Done",
  img: errorIcon,
  text: props.text,
};

const notificationState = ref(stateNotification(error));

watch(
  () => props.state,
  (newValue) => {
    if (newValue) {
      notificationState.value = stateNotification(done);
    } else {
      notificationState.value = stateNotification(error);
    }
  },
  { immediate: true }
);

const { message, img, text } = notificationState.value;

const notificationRef = ref(null);

onMounted(() => {
  setTimeout(() => {
    if (notificationRef.value) {
      notificationRef.value.classList.add("notification__hidden");
    }
  }, 2000);
  setTimeout(() => {
    if (notificationRef.value) {
      notificationRef.value.style.display = "none";
    }
  }, 2300);
});
</script>

<style lang="scss">
.notification {
  animation: showPlusY 0.5s ease;
  @keyframes showPlusY {
    0% {
      transform: translateY(-50px);
    }
    80% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(0px);
    }
  }
}

.notification__hidden {
  opacity: 0;
  transition: opacity 0.5s ease;
}
</style>
