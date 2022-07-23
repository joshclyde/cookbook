<script setup lang="ts">
defineProps<{ ingredients: Array<string> }>();
</script>

<template>
  <DxHeading2>Ingredients 🧂</DxHeading2>
  <ul>
    <li v-for="ingredient in ingredients">
      {{ ingredient }}
    </li>
  </ul>
</template>
