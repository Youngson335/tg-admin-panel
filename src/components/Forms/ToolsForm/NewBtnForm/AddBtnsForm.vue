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
const btns = ref([]);

const addNewForm = () => {
  forms.value.push({
    id: Math.random(Date.now()).toString().slice(0, 6),
    visible: true,
    button: ref(null),
  });
};

const removeForm = (id) => {
  // delete from ui
  const index = forms.value.findIndex((form) => form.id === id);
  if (index !== -1) {
    forms.value.splice(index, 1);
  }

  // delete from vuex
  store.commit("removeButtonFromApiEndpoint", id);
};

const saveForm = (formData) => {
  const buttonWithId = { ...formData };

  btns.value.push(buttonWithId);
  forms.value.button = buttonWithId;

  store.commit("addButtonToApiEndpoint", buttonWithId);
};
</script>
