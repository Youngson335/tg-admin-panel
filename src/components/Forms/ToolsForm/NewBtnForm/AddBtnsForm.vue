<template>
  <div>
    <div
      v-for="(form, index) in forms"
      :key="form.id"
      class="bg-dark-gray rounded-[20px] mb-[15px]"
    >
      <NewBtnsForm
        :id="form.id"
        v-if="form.visible"
        @removeForm="removeForm"
        @saveForm="saveForm"
      />
    </div>
    <AddButton @click="addNewForm" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import AddButton from "../Buttons/AddButton.vue";
import NewBtnsForm from "./NewBtnsForm.vue";

const store = useStore();
const forms = ref([]);

const addNewForm = () => {
  forms.value.push({
    id: Date.now(),
    visible: true,
  });
};

const removeForm = (id) => {
  const index = forms.value.findIndex((form) => form.id === id);
  if (index !== -1) {
    forms.value.splice(index, 1);
  }
};

const saveForm = (formData) => {
  store.commit("addButtonToApiEndpoint", formData);
};
</script>
