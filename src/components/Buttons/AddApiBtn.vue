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
import { computed, defineEmits, inject, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

let newApi = ref(computed(() => store.getters["getNewApi"]));

const emit = defineEmits(["addApi"]);

const addEndpoint = () => {
  if (newApi.value === true) {
    store.commit("createNewApi", false);
  } else {
    store.commit("createNewApi", true);
  }
  console.log(newApi.value);
  // emit("addApi");
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
