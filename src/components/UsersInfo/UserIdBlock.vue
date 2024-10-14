<template>
  <div
    class="user-id__block flex justify-between items-center bg-graphite pl-[16px] py-[10px] pr-[12px] rounded-[20px]"
  >
    <div class="flex items-center">
      <div
        class="mr-[15px] bg-black-- w-[30px] h-[30px] flex justify-center items-center rounded-[50%]"
      >
        <p>{{ user.id }}</p>
      </div>
      <div>
        <p>{{ user.userId }}</p>
      </div>
    </div>
    <div>
      <RemoveUserBtn @click="removeUser" />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import RemoveUserBtn from "../Forms/ToolsForm/Buttons/RemoveUserBtn.vue";
import { useStore } from "vuex";

const store = useStore();

const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
  removeUser: {
    type: Function,
    required: true,
  },
});
</script>

<style lang="scss">
.user-id__block {
  animation: showMinusY 0.5s ease;
}
</style>
