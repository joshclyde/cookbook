<script setup lang="ts">
const props = defineProps<{ seconds: number }>();
const timersStore = useTimersStore();

const text = computed(() => {
  return props.seconds / 60;
});

function onClick() {
  timersStore.add(props.seconds, "Unknown");
}
</script>

<template>
  <dx-button @click="onClick">{{ text }}</dx-button>
</template>
