<script setup lang="ts">
import { XCircleIcon, PauseIcon, PlayIcon } from "@heroicons/vue/outline";

const props = defineProps<{ id: string }>();

const timersStore = useTimersStore();
timersStore.play(props.id);

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

function toggle() {
  if (timer.value.isActive) {
    timersStore.pause(props.id);
  } else {
    timersStore.play(props.id);
  }
}

function clear() {
  timersStore.clear(props.id);
}
</script>

<template>
  <div class="flex flex-col justify-center w-fit">
    <div class="flex items-center">
      <DxIconButton @click="toggle">
        <PauseIcon v-if="timer.isActive" class="h-6 w-6"></PauseIcon>
        <PlayIcon v-else class="h-6 w-6"></PlayIcon>
      </DxIconButton>
      <div class="w-24 flex justify-center items-center">
        <DxText class="text-2xl">{{ time }}</DxText>
      </div>
      <DxIconButton @click="clear">
        <XCircleIcon class="h-6 w-6"></XCircleIcon>
      </DxIconButton>
    </div>
    <DxText>{{ timer.name }}</DxText>
  </div>
</template>
