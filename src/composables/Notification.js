import { ref } from "vue";

export function useNotification() {
  const notificationState = ref(null);
  const notificationVisible = ref(false);

  function showNotification(type, message, err = null) {
    notificationState.value = { type, message, err };
    notificationVisible.value = true;

    setTimeout(() => {
      notificationVisible.value = false;
    }, 4000);
  }

  return {
    notificationState,
    notificationVisible,
    showNotification,
  };
}
