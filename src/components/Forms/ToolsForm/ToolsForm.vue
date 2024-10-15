<template>
  <div>
    <ImageLinkInput class="mb-[14px]" />
    <TextareaMessage ref="textareaMessage" class="mb-[14px]" />
    <AddBtnsForm class="mb-[14px]" />
    <PreferenceAccordion class="mb-[14px]" />
    <SelectedUsersAccordion class="mb-[14px]" />
    <SendBtn @click="handleSend" />
  </div>
  <Notification :notification="notificationState" v-if="notificationVisible" />
</template>

<script setup>
import ImageLinkInput from "./Inputs/ImageLinkInput.vue";
import TextareaMessage from "./Inputs/TextareaMessage.vue";
import AddBtnsForm from "./NewBtnForm/AddBtnsForm.vue";
import PreferenceAccordion from "@/components/Accordions/PreferenceAccordion.vue";
import SelectedUsersAccordion from "@/components/Accordions/SelectedUsersAccordion.vue";
import SendBtn from "@/components/Buttons/SendBtn.vue";
import Notification from "@/components/Notification/Notification.vue";
import { useNotification } from "@/composables/Notification";
import { ref, computed } from "vue";
import { useStore } from "vuex";
import axios from "axios";
import { postToolsData } from "@/composables/requests/postToolsData";

const store = useStore();

let apiEndpoint = computed(() => store.getters["getApiData"]);
let activeApi = computed(() => store.state.activeApi);

const textareaMessage = ref(null);

const { notificationState, notificationVisible, showNotification } =
  useNotification();

async function handleSend() {
  textareaMessage.value.sendMessage();

  if (activeApi.value === null) {
    showNotification("error", "Select api!", "API not selected");
  } else {
    if (store.state.apiEndpoint.messageText !== "") {
      if (window.Telegram && Telegram.WebApp.version >= 6.2) {
        Telegram.WebApp.showConfirm("Send data?", async (result) => {
          if (result) {
            try {
              const response = await postToolsData(
                activeApi.value,
                apiEndpoint.value
              );
              showNotification(
                "success",
                "The newsletter has been successfully launched!",
                response
              );
            } catch (error) {
              showNotification(
                "error",
                "Error when starting the mailing list:",
                error.message
              );
            }
          } else {
            showNotification(
              "error",
              "Error when starting the mailing list:",
              "Some error occurred"
            );
          }
        });
      } else {
        if (confirm("Send data?")) {
          try {
            const response = await postToolsData(
              activeApi.value,
              apiEndpoint.value
            );
            showNotification(
              "success",
              "The newsletter has been successfully launched!",
              response
            );
          } catch (error) {
            showNotification(
              "error",
              "Error when starting the mailing list:",
              error.message
            );
          }
        } else {
          showNotification(
            "error",
            "Error when starting the mailing list:",
            "Some error occurred"
          );
        }
      }
    } else {
      showNotification("error", "Заполните все поля!", "Validation error");
    }
  }
}
</script>
