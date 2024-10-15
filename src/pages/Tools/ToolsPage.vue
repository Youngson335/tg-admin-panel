<template>
  <div v-if="apiLength === 0" class="h-[70%] flex justify-center items-center">
    <NotConnected />
  </div>

  <div v-else class="tools my-container overflow-scroll h-[75vh] relative">
    <div class="mb-[15px]">
      <MainTItle :text="'mailing tools'" />
    </div>
    <ToolsForm />
  </div>
</template>
<script setup>
import MainTItle from "@/components/Titles/MainTItle.vue";
import ToolsForm from "../../components/Forms/ToolsForm/ToolsForm.vue";
import { useStore } from "vuex";
import NotConnected from "./NotConnected/NotConnected.vue";
import { computed } from "vue";

const store = useStore();

let apiLength = computed(() => store.getters["getApi"].length);
</script>
