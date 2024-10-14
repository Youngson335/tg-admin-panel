<template>
  <div
    class="accordion transition-colors duration-300 bg-dark-gray rounded-[30px]"
    @click="toggleAccordion"
  >
    <div
      class="accordion-header flex items-center justify-between p-4 cursor-pointer"
    >
      <h3 class="text-lg font-semibold">{{ title }}</h3>
      <img
        src="../../assets/icons/accordion_arrow-icon.svg"
        alt="arrow"
        class="transition-transform"
        :class="{ 'rotate-180': isOpen }"
      />
    </div>
    <transition name="fade">
      <div v-if="isOpen" class="accordion-content p-4" @click.stop>
        <UserIdInput v-model="inputValue" class="mb-[10px]" />
        <AddUserBtn @click="addUser" class="mb-[25px]" />
        <UserIdBlock
          v-for="user in users"
          :user="user"
          :removeUser="() => removeUser(user.id)"
          :key="user.id"
          class="mb-[10px]"
        />
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";
import UserIdInput from "../Forms/ToolsForm/Inputs/UserIdInput.vue";
import AddUserBtn from "../Forms/ToolsForm/Buttons/AddUserBtn.vue";
import UserIdBlock from "../UsersInfo/UserIdBlock.vue";
import { useStore } from "vuex";

const store = useStore();

const isOpen = ref(false);
const title = ref("Selected users");
const inputValue = ref("");
const users = ref([]);

const toggleAccordion = () => {
  isOpen.value = !isOpen.value;
};

const addUser = () => {
  if (inputValue.value.trim()) {
    const newUser = { id: users.value.length + 1, userId: inputValue.value };

    users.value.push(newUser);
    inputValue.value = "";

    if (users.value.length === 1) {
      const testUsersArray = [{ chat_id: newUser.userId }];
      const updatedApiEndpoint = { testUsers: testUsersArray };
      store.commit("addTestUsers", updatedApiEndpoint);
    } else {
      store.commit("addUserToTestUsers", newUser.userId);
    }
  }
};

const removeUser = (id) => {
  let user = users.value.find((item) => item.id === id);
  console.log(user);
  store.commit("removeTestUser", user.userId);
  users.value = users.value.filter((user) => user.id !== id);
};
</script>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  filter: blur(3px);
}

img {
  width: 12px;
  height: auto;
}
</style>
