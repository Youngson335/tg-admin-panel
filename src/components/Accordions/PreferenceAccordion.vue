<!-- <template>
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
      <div v-if="isOpen" class="accordion-content p-4">
        <div
          class="flex justify-center items-center flex-col"
          v-for="(input, index) in inputs"
          :key="index"
          @click.stop
        >
          <h5
            class="w-full text-start text-xs font-normal leading-[14.52px] pl-[15px] text-white50-- mb-[10px]"
          >
            {{ input.title }}
          </h5>

          <div
            class="flex justify-center items-center bg-dark-gray rounded-[20px] overflow-hidden w-full mb-[10px]"
            v-if="input.title !== 'scheduledTime'"
          >
            <input
              type="text"
              class="w-full bg-black-- text-white-- border-0 py-[1.3rem] px-4"
              placeholder="value"
              v-model="input.value"
            />
            <OptionalLabel />
          </div>

          <div
            class="flex justify-center items-center bg-dark-gray rounded-[20px] overflow-hidden w-full mb-[10px]"
            v-if="input.title === 'scheduledTime'"
          >
            <DateInput
              v-model="input.value"
              class="w-full bg-black-- text-white-- border-0"
            />
            <OptionalLabel />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";
import OptionalLabel from "../Forms/ToolsForm/Labels/OptionalLabel.vue";
import DateInput from "../Forms/ToolsForm/Inputs/DateInput.vue";

const isOpen = ref(false);
const title = ref("Preference");
const inputs = ref([
  { title: "estimatedUserCount", value: "" },
  { title: "reportChatId", value: "" },
  { title: "webhookUrl", value: "" },
  { title: "reportIntervalMinutes", value: "" },
  { title: "scheduledTime", value: "" },
  { title: "days_active", value: "" },
]);

const toggleAccordion = () => {
  isOpen.value = !isOpen.value;
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
</style> -->

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
      <div v-if="isOpen" class="accordion-content p-4">
        <div
          class="flex justify-center items-center flex-col"
          v-for="(input, index) in inputs"
          :key="index"
          @click.stop
        >
          <h5
            class="w-full text-start text-xs font-normal leading-[14.52px] pl-[15px] text-white50-- mb-[10px]"
          >
            {{ input.title }}
          </h5>

          <div
            class="flex justify-center items-center bg-dark-gray rounded-[20px] overflow-hidden w-full mb-[10px]"
            v-if="input.title !== 'scheduledTime'"
          >
            <input
              type="text"
              class="w-full bg-black-- text-white-- border-0 py-[1.3rem] px-4"
              placeholder="value"
              v-model="input.value"
            />
            <OptionalLabel />
          </div>

          <div
            class="flex justify-center items-center bg-dark-gray rounded-[20px] overflow-hidden w-full mb-[10px]"
            v-if="input.title === 'scheduledTime'"
          >
            <DateInput
              v-model="input.value"
              class="w-full bg-black-- text-white-- border-0"
            />
            <OptionalLabel />
          </div>
        </div>
        <SaveFieldsBtn @click="saveFilledInputs" />
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import OptionalLabel from "../Forms/ToolsForm/Labels/OptionalLabel.vue";
import DateInput from "../Forms/ToolsForm/Inputs/DateInput.vue";
import SaveFieldsBtn from "../Buttons/SaveFieldsBtn.vue";

const store = useStore();

const isOpen = ref(false);
const title = ref("Preference");
const inputs = ref([
  { title: "estimatedUserCount", value: "" },
  { title: "reportChatId", value: "" },
  { title: "webhookUrl", value: "" },
  { title: "reportIntervalMinutes", value: "" },
  { title: "scheduledTime", value: "" },
  { title: "days_active", value: "" },
]);

const toggleAccordion = () => {
  isOpen.value = !isOpen.value;
};

const saveFilledInputs = () => {
  const filledInputs = {};
  inputs.value.forEach((input) => {
    if (input.value) {
      filledInputs[input.title] = input.value;
    }
  });
  store.commit("addTestUsers", filledInputs);
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
