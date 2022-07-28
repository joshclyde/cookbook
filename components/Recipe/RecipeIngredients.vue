<script setup lang="ts">
defineProps<{ ingredients: Array<string> }>();
</script>

<template>
  <DxHeading2>Ingredients 🧂</DxHeading2>
  <ul className="divide-y">
    <li v-for="ingredient in ingredients" className="py-1">
      {{ ingredient }}
    </li>
  </ul>
</template>
