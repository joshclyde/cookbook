<script setup lang="ts">
const timersStore = useTimersStore();
</script>

<template>
  <div>
    <div class="mb-4">
      <TimerQuickStart :seconds="60 * 5"></TimerQuickStart>
      <TimerQuickStart :seconds="60 * 10"></TimerQuickStart>
      <TimerQuickStart :seconds="60 * 15"></TimerQuickStart>
      <TimerQuickStart :seconds="60 * 20"></TimerQuickStart>
      <TimerQuickStart :seconds="60 * 25"></TimerQuickStart>
      <TimerQuickStart :seconds="60 * 30"></TimerQuickStart>
    </div>
    <div class="flex space-x-10">
      <TimerActive v-for="id in timersStore.ids" :id="id" />
    </div>
  </div>
</template>
