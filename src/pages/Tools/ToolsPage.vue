<template>
  <div
    class="tools my-container overflow-scroll h-[100%] mb-[80px] relative"
    v-if="apiLength > 0"
  >
    <div class="mb-[15px]">
      <MainTItle :text="'mailing tools'" />
    </div>
    <ToolsForm />
  </div>
  <NotConnected v-if="apiLength === 0 && selectedApi === null" />
</template>
<script setup>
import MainTItle from "@/components/Titles/MainTItle.vue";
import ToolsForm from "../../components/Forms/ToolsForm/ToolsForm.vue";
import NotConnected from "../NotConnected/NotConnected.vue";
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const apiLength = computed(() => store.getters["getApi"].length);
const selectedApi = computed(() => store.getters["getSelectedApi"]);
</script>
