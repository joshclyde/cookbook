<script setup lang="ts">
const props = defineProps<{ id: string }>();

const timersStore = useTimersStore();
timersStore.start(props.id);

const text = computed(() => {
  const timer = timersStore.id(props.id);
  const secondsLeft = Math.round(timer.seconds - timer.ticksMS / 1000);
  const sec = secondsLeft % 60;
  const min = (secondsLeft - sec) / 60;
  return `${min}:${sec < 10 ? '0' : ''}${sec}`;
});
</script>

<template>
  <Text>{{ text }}</Text>
</template>
