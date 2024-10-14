<!-- <template>
  <div>
    <ImageLinkInput class="mb-[14px]" />
    <TextareaMessage class="mb-[14px]" />
    <AddBtnsForm class="mb-[14px]" />
    <PreferenceAccordion class="mb-[14px]" />
    <SelectedUsersAccordion class="mb-[14px]" />
    <SendBtn />
  </div>
</template>
<script setup>
import ImageLinkInput from "./Inputs/ImageLinkInput.vue";
import TextareaMessage from "./Inputs/TextareaMessage.vue";
import AddBtnsForm from "./NewBtnForm/AddBtnsForm.vue";
import PreferenceAccordion from "@/components/Accordions/PreferenceAccordion.vue";
import SelectedUsersAccordion from "@/components/Accordions/SelectedUsersAccordion.vue";
import SendBtn from "@/components/Buttons/SendBtn.vue";
</script> -->

<template>
  <div>
    <ImageLinkInput class="mb-[14px]" />
    <TextareaMessage ref="textareaMessage" class="mb-[14px]" />
    <AddBtnsForm class="mb-[14px]" />
    <PreferenceAccordion class="mb-[14px]" />
    <SelectedUsersAccordion class="mb-[14px]" />
    <SendBtn @click="handleSend" />
    <!-- Вызываем метод напрямую -->
  </div>
</template>

<script setup>
import ImageLinkInput from "./Inputs/ImageLinkInput.vue";
import TextareaMessage from "./Inputs/TextareaMessage.vue";
import AddBtnsForm from "./NewBtnForm/AddBtnsForm.vue";
import PreferenceAccordion from "@/components/Accordions/PreferenceAccordion.vue";
import SelectedUsersAccordion from "@/components/Accordions/SelectedUsersAccordion.vue";
import SendBtn from "@/components/Buttons/SendBtn.vue";
import { ref } from "vue";

const textareaMessage = ref(null);

function handleSend() {
  textareaMessage.value.sendMessage(); // Вызов метода sendMessage из TextareaMessage
}
</script>
