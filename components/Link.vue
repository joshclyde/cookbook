<script setup lang="ts">
defineProps<{ to: string }>();
</script>

<template>
  <NuxtLink class="text-sky-500 hover:text-sky-700 focus:text-sky-900" :to="to">
    <slot />
  </NuxtLink>
</template>
