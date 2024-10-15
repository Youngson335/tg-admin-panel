<template>
  <div class="relative w-[100%]">
    <textarea
      v-model="message"
      :maxlength="maxChars"
      @input="handleInput"
      placeholder="Enter message..."
      class="block w-full p-4 text-white bg-dark-gray rounded-[20px] focus:outline-none resize-none text-[12px]"
      :style="{ height: textareaHeight }"
      rows="1"
      ref="textarea"
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
      textareaHeight: "132px",
    };
  },
  methods: {
    handleInput() {
      this.updateCharCount();
      this.adjustHeight();
    },
    updateCharCount() {
      this.remainingChars = this.maxChars - this.message.length;
    },
    adjustHeight() {
      this.textareaHeight = "auto";
      this.$nextTick(() => {
        const newHeight = this.$refs.textarea.scrollHeight;

        if (newHeight > 132) {
          this.textareaHeight = newHeight + "px";
        } else {
          this.textareaHeight = "132px";
        }
      });
    },
    ...mapActions(["saveMessageText"]),
    sendMessage() {
      this.saveMessageText(this.message);
      this.message = "";
      this.adjustHeight();
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
