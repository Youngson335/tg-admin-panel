<template>
  <div class="mb-[16px]">
    <div
      @click="showDeclineBtn"
      class="flex justify-start items-center p-[16px] bg-dark-gray rounded-[20px] mb-[13px]"
    >
      <ListImage :img="list.image" />
      <div>
        <p class="text-xs font-bold leading-[14.52px] text-left">
          Message text...
        </p>
        <ListMessage :message="list.message" />
      </div>
    </div>

    <DeclineBlock v-if="declineState" />
  </div>
</template>

<script setup>
import ListMessage from "./ListMessage.vue";
import ListImage from "./ListImage.vue";
import DeclineBlock from "./DeclineBlock.vue";
import { ref } from "vue";

// Получаем props
const props = defineProps({
  list: {
    type: Object,
    required: true,
  },
});

let declineState = ref(false);

const showDeclineBtn = () => {
  declineState.value = !declineState.value;
};
</script>
