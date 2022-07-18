<script setup lang="ts">
const cookbook = useCookbook();
</script>

<template>
  <div>
    <DxHeading1>Cookbook 📙</DxHeading1>
    <div v-for="recipe in cookbook">
      <DxLink :to="`/recipes/${recipe.id}`">
        {{ recipe.name }}
      </DxLink>
    </div>
  </div>
</template>
