<template>
  <div class="task p-[16px] bg-dark-gray mb-[16px] rounded-[20px]">
    <TaskTItle :title="task.title" />
    <TaskReward :reward="task.reward" />
    <div class="flex items-center">
      <DeleteBtn class="mr-[10px]" />
      <LinkBtn class="mr-[10px]" />
      <p class="text-white50--">
        Added: <span class="text-white--">{{ task.date }}</span>
      </p>
    </div>
  </div>
</template>

<script setup>
import TaskTItle from "./TaskTItle.vue";
import TaskReward from "./TaskReward.vue";
import DeleteBtn from "../Buttons/Icons/DeleteBtn.vue";
import LinkBtn from "../Buttons/Icons/LinkBtn.vue";
defineProps({
  task: {
    type: Object,
  },
});
</script>
