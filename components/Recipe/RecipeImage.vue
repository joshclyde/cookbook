<script setup lang="ts">
defineProps<{ image: string }>();
</script>

<template>
  <DxHeading2>Image 📷</DxHeading2>
  <img class="w-32 h-32" :src="image" />
</template>
