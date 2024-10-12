<template>
  <div>
    <CounterList
      @click="showBlock(0)"
      class="cursor-pointer"
      :listsLength="props.activeEndpoint.lists.length"
    />
    <div v-if="showLists" class="component__lists">
      <p class="mb-[10px]">Now</p>
      <ListBlock :lists="props.activeEndpoint.lists" />
    </div>
  </div>

  <div>
    <CounterTasks
      @click="showBlock(1)"
      class="cursor-pointer"
      :tasksLength="props.activeEndpoint.tasks.length"
    />
    <TaskBlock
      v-if="showTasks"
      class="component__tasks"
      :tasks="props.activeEndpoint.tasks"
    />
  </div>
</template>
<script setup>
import CounterList from "@/components/Counter/CounterList.vue";
import CounterTasks from "@/components/Counter/CounterTasks.vue";
import TaskBlock from "@/components/Task/TaskBlock.vue";
import ListBlock from "@/components/List/ListBlock.vue";

import { ref } from "vue";
import { defineProps } from "vue";

const props = defineProps({
  activeEndpoint: {
    type: Object,
  },
});

const showLists = ref(false);
const showTasks = ref(false);

const showBlock = (flag) => {
  if (flag === 0) {
    showLists.value = !showLists.value;
  } else if (flag === 1) {
    showTasks.value = !showTasks.value;
  }
};
</script>
<style lang=""></style>
