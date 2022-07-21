<script setup lang="ts">
import { XCircleIcon, PauseIcon, PlayIcon } from "@heroicons/vue/outline";

const props = defineProps<{ id: string }>();

const timersStore = useTimersStore();

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

const name = computed({
  get() {
    return timer.value.name;
  },
  set(value) {
    timersStore.setName(props.id, value);
  },
});
</script>

<template>
  <div class="flex flex-col justify-center w-36">
    <div class="flex items-center">
      <DxIconButton @click="toggle" class="h-6 w-6">
        <PauseIcon v-if="timer.isActive"></PauseIcon>
        <PlayIcon v-else></PlayIcon>
      </DxIconButton>
      <div class="w-24 flex justify-center items-center">
        <DxText class="text-2xl">{{ time }}</DxText>
      </div>
      <DxIconButton @click="clear" class="h-6 w-6">
        <XCircleIcon></XCircleIcon>
      </DxIconButton>
    </div>
    <input class="border border-orange-400 rounded-sm pl-1" v-model="name" />
  </div>
</template>
