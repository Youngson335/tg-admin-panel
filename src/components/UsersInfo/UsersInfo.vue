<template>
  <div class="info-users">
    <div class="users-total mb-[16px]">
      <div class="users-total__info p-4 bg-dark-gray rounded-[20px]">
        <h3
          class="text-xs font-medium leading-[14.52px] text-center text-[#FFFFFF80]"
        >
          TOTAL USERS:
        </h3>
        <strong class="text-4xl font-bold leading-[38.73px] text-center">
          {{ activeUserInfo.totalUsers }}
        </strong>
      </div>
    </div>

    <div class="users-block flex justify-between items-center">
      <div class="users-mau w-[49%]">
        <div class="users-mau__info p-4 bg-dark-gray rounded-[20px]">
          <h3
            class="text-xs font-medium leading-[14.52px] text-center text-[#FFFFFF80]"
          >
            MAU:
          </h3>
          <strong class="text-4xl font-bold leading-[38.73px] text-center">
            {{ activeUserInfo.mauUsers }}
          </strong>
        </div>
      </div>
      <div class="users-dau w-[49%]">
        <div class="users-dau__info p-4 bg-dark-gray rounded-[20px]">
          <h3
            class="text-xs font-medium leading-[14.52px] text-center text-[#FFFFFF80]"
          >
            DAU:
          </h3>
          <strong class="text-4xl font-bold leading-[38.73px] text-center">
            {{ activeUserInfo.dauUsers }}
          </strong>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { defineProps } from "vue";

const props = defineProps({
  activeUserInfo: {
    type: Object,
  },
});
</script>
<style lang=""></style>
