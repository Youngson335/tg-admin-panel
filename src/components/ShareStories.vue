<template>
  <div class="flex flex-col items-center">
    <button
      @click="shareToTelegramStory"
      class="bg-telegram text-white py-2 px-6 rounded cursor-pointer hover:bg-telegram-dark"
    >
      Поделиться в историю Telegram
    </button>
  </div>
</template>

<script setup>
const mediaUrl = "t.me/CaptainsBay"; // Готовая ссылка для публикации

// Метод для публикации в истории Telegram
const shareToTelegramStory = () => {
  try {
    // Проверяем наличие объекта Telegram Web Apps API
    if (
      window.Telegram &&
      window.Telegram.WebApp &&
      window.Telegram.WebApp.shareToStory
    ) {
      // Публикуем историю с помощью shareToStory
      window.Telegram.WebApp.shareToStory(mediaUrl, {
        content_type: "link", // Тип контента
        caption: "Поделитесь с друзьями!", // Подпись к истории
      });
    } else {
      console.error("Метод shareToStory недоступен.");
    }
  } catch (error) {
    console.error("Ошибка при публикации в историю:", error);
  }
};
</script>

<style scoped>
.bg-telegram {
  background-color: #0088cc;
}
.bg-telegram-dark {
  background-color: #007bb5;
}
</style>
