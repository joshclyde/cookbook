<script setup lang="ts">
import { parsedTimerSeconds } from "~~/utils/directions";

const props = defineProps<{ text: string }>();
const timersStore = useTimersStore();

const seconds = computed(() => {
  return parsedTimerSeconds(props.text);
});

function onClick() {
  timersStore.add(seconds.value, "Unknown");
}
</script>

<template>
  <dx-button @click="onClick">{{ text }}</dx-button>
</template>
