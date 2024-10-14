<template>
  <div class="relative">
    <div
      class="absolute top-0 left-0 w-full h-full flex items-center px-4 py-[1.3rem] text-white pointer-events-none z-0 lowercase"
    >
      <span class="mask text-[12px] font-medium">{{ maskedPlaceholder }}</span>
    </div>

    <input
      v-model="inputValue"
      @input="formatInput"
      type="text"
      maxlength="16"
      class="w-full bg-transparent text-white border-0 py-[1.3rem] px-4 relative z-10"
      placeholder=""
    />
  </div>
</template>

<script setup>
import { ref, computed, watch, defineEmits } from "vue";

const emit = defineEmits();
const inputValue = ref("");
const props = defineProps(["modelValue"]);

const placeholderMask = "ДД.ММ.ГГГГ ЧЧ:ММ";

const maskedPlaceholder = computed(() => {
  let filledValue = inputValue.value;
  let result = "";

  for (let i = 0; i < placeholderMask.length; i++) {
    if (filledValue[i]) {
      result += filledValue[i];
    } else {
      result += placeholderMask[i];
    }
  }

  return result;
});

watch(
  () => props.modelValue,
  (newValue) => {
    inputValue.value = newValue;
  }
);

const formatInput = () => {
  let formattedValue = inputValue.value.replace(/[^0-9]/g, "");

  let day = formattedValue.slice(0, 2);
  let month = formattedValue.slice(2, 4);
  let year = formattedValue.slice(4, 8);
  let hours = formattedValue.slice(8, 10);
  let minutes = formattedValue.slice(10, 12);

  let result = "";
  if (day) result += day;
  if (month) result += "." + month;
  if (year) result += "." + year;
  if (hours || minutes)
    result += " " + (hours || "") + (minutes ? ":" + minutes : "");

  inputValue.value = result.trim();

  emit("update:modelValue", inputValue.value);
};
</script>

<style scoped>
.relative {
  position: relative;
}

.mask {
  color: rgba(255, 255, 255, 0.5);
}
</style>
