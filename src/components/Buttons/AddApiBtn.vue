<template>
  <div
    class="add-api flex justify-start items-center w-[140px] m-auto bg-dark-gray"
  >
    <button class="flex justify-between items-center" @click="addEndpoint">
      <img
        class="p-4 block mr-[15px] bg-light-gray"
        src="../../assets/icons/plus-icon.svg"
        alt=""
      />
      <p>Add Api</p>
    </button>
  </div>
</template>

<script setup>
import { defineEmits, inject } from "vue";
import { useStore } from "vuex";

const store = useStore();

let newApi = inject("newApi");

const emit = defineEmits(["addApi"]);

const addEndpoint = () => {
  emit("addApi");
};
</script>

<style lang="scss">
.add-api {
  border-radius: 100px;
  & img {
    border-radius: 50%;
  }
}
</style>
