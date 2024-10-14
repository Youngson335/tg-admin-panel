<template>
  <div
    class="flex justify-center items-center bg-dark-gray rounded-[20px] overflow-hidden"
  >
    <input
      id="imageLink"
      type="text"
      class="w-full bg-dark-gray text-white-- border-0 py-[1.3rem] px-4"
      placeholder="Image link"
    />
    <OptionalLabel />
  </div>
</template>

<script setup>
import OptionalLabel from "../Labels/OptionalLabel.vue";
</script>
