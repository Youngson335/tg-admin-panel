<template>
  <nav
    class="flex items-center justify-between max-w-[393px] m-auto p-[28px] px-[81px] bg-[#111111]"
  >
    <div class="menu__item" @click="setActive(1)">
      <router-link to="tools">
        <div
          :class="['menu__icon cursor-pointer', { active: activeMenu === 1 }]"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="icon-left icon"
          >
            <path
              d="M19 9.50003C19.0034 10.8199 18.6951 12.1219 18.1 13.3C17.3944 14.7118 16.3098 15.8992 14.9674 16.7293C13.6251 17.5594 12.0782 17.9994 10.5 18C9.18013 18.0035 7.87812 17.6951 6.7 17.1L1 19L2.9 13.3C2.30493 12.1219 1.99656 10.8199 2 9.50003C2.00061 7.92179 2.44061 6.37488 3.27072 5.03258C4.10083 3.69028 5.28825 2.6056 6.7 1.90003C7.87812 1.30496 9.18013 0.996587 10.5 1.00003H11C13.0843 1.11502 15.053 1.99479 16.5291 3.47089C18.0052 4.94699 18.885 6.91568 19 9.00003V9.50003Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </router-link>
    </div>
    <div class="menu__item" @click="setActive(2)">
      <router-link to="/">
        <div
          :class="['menu__icon cursor-pointer', { active: activeMenu === 2 }]"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="icon-center icon"
          >
            <path
              d="M6 1H3C2.46957 1 1.96086 1.21071 1.58579 1.58579C1.21071 1.96086 1 2.46957 1 3V6M19 6V3C19 2.46957 18.7893 1.96086 18.4142 1.58579C18.0391 1.21071 17.5304 1 17 1H14M14 19H17C17.5304 19 18.0391 18.7893 18.4142 18.4142C18.7893 18.0391 19 17.5304 19 17V14M1 14V17C1 17.5304 1.21071 18.0391 1.58579 18.4142C1.96086 18.7893 2.46957 19 3 19H6"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </router-link>
    </div>
    <div class="menu__item" @click="setActive(3)">
      <div :class="['menu__icon cursor-pointer', { active: activeMenu === 3 }]">
        <svg
          width="22"
          height="20"
          viewBox="0 0 22 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="icon-right icon"
        >
          <path
            d="M3 1H19C19.5304 1 20.0391 1.21071 20.4142 1.58579C20.7893 1.96086 21 2.46957 21 3V9C21 11.6522 19.9464 14.1957 18.0711 16.0711C16.1957 17.9464 13.6522 19 11 19C9.68678 19 8.38642 18.7413 7.17317 18.2388C5.95991 17.7362 4.85752 16.9997 3.92893 16.0711C2.05357 14.1957 1 11.6522 1 9V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1Z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7 8L11 12L15 8"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from "vue";

let activeMenu = ref(2);

const setActive = (id) => {
  activeMenu.value = id;
  localStorage.setItem("activeMenu", id);
};

onMounted(() => {
  const savedActiveMenu = localStorage.getItem("activeMenu");
  if (savedActiveMenu) {
    activeMenu.value = parseInt(savedActiveMenu);
  }
});
</script>

<style lang="scss">
.active {
  & .icon {
    color: #2196f3;
  }
}
</style>
