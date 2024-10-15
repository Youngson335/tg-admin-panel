<template>
  <div class="tools my-container overflow-scroll h-[75vh] relative">
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

const store = useStore();
</script>
