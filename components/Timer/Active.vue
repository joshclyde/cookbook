<script setup lang="ts">
import { XCircleIcon, PauseIcon } from "@heroicons/vue/outline";
import IconButton from "../Dx/IconButton.vue";

const props = defineProps<{ id: string }>();

const timersStore = useTimersStore();
timersStore.start(props.id);

const timer = computed(() => {
  return timersStore.id(props.id);
});
const time = computed(() => {
  const secondsLeft = Math.round(
    timer.value.seconds - timer.value.ticksMS / 1000
  );
  const sec = secondsLeft % 60;
  const min = (secondsLeft - sec) / 60;
  return `${min}:${sec < 10 ? "0" : ""}${sec}`;
});
</script>

<template>
  <div class="flex flex-col justify-center w-fit">
    <div class="flex items-center">
      <IconButton>
        <PauseIcon class="h-6 w-6"></PauseIcon>
      </IconButton>
      <div class="w-24 flex justify-center items-center">
        <Text class="text-2xl">{{ time }}</Text>
      </div>
      <IconButton>
        <XCircleIcon class="h-6 w-6"></XCircleIcon>
      </IconButton>
    </div>
    <Text>{{ timer.name }}</Text>
  </div>
</template>
