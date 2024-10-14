<template>
  <div
    class="flex justify-center items-center bg-dark-gray rounded-[20px] overflow-hidden"
  >
    <input
      id="imageLink"
      type="text"
      class="w-full bg-black-- text-white-- border-0 py-[1.3rem] px-4"
      placeholder="user id"
      :value="modelValue"
      @input="updateValue"
    />
    <OptionalLabel />
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import OptionalLabel from "../Labels/OptionalLabel.vue";

const props = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);

const updateValue = (event) => {
  emit("update:modelValue", event.target.value);
};
</script>
