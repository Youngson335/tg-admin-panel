<!-- <template>
  <div class="relative w-[100%]">
    <textarea
      v-model="message"
      :maxlength="maxChars"
      @input="updateCharCount"
      placeholder="Enter message..."
      class="block w-full p-4 text-white bg-dark-gray rounded-[20px] focus:outline-none resize-none text-[12px]"
      rows="4"
    ></textarea>
    <div
      class="absolute bottom-4 right-4 flex items-center justify-end text-white"
    >
      <div class="ml-2 bg-black-- px-3 py-1 rounded-lg text-[12px] font-medium">
        {{ remainingChars }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      maxChars: 1200,
      remainingChars: 1200,
    };
  },
  methods: {
    updateCharCount() {
      this.remainingChars = this.maxChars - this.message.length;
    },
  },
};
</script>

<style scoped>
textarea::placeholder {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 12px;
  color: #ffffff80;
}
</style> -->

<template>
  <div class="relative w-[100%]">
    <textarea
      v-model="message"
      :maxlength="maxChars"
      @input="updateCharCount"
      placeholder="Enter message..."
      class="block w-full p-4 text-white bg-dark-gray rounded-[20px] focus:outline-none resize-none text-[12px]"
      rows="4"
    ></textarea>
    <div
      class="absolute bottom-4 right-4 flex items-center justify-end text-white"
    >
      <div class="ml-2 bg-black-- px-3 py-1 rounded-lg text-[12px] font-medium">
        {{ remainingChars }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      message: "",
      maxChars: 1200,
      remainingChars: 1200,
    };
  },
  methods: {
    updateCharCount() {
      this.remainingChars = this.maxChars - this.message.length;
    },
    ...mapActions(["saveMessageText"]),
    sendMessage() {
      this.saveMessageText(this.message); // Сохраняем сообщение в Vuex
      this.message = ""; // Очищаем текстовое поле после отправки
    },
  },
};
</script>

<style scoped>
textarea::placeholder {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 12px;
  color: #ffffff80;
}
</style>
