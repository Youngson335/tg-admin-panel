<template>
  <div class="list-block">
    <List v-for="list in lists" :key="list.id" :list="list" />
  </div>
</template>
<script setup>
import List from "./List.vue";
import { defineProps } from "vue";

const props = defineProps({
  lists: {
    type: Object,
  },
});
</script>
<style lang=""></style>
