<script setup lang="ts">
const cookbook = useCookbook();
</script>

<template>
  <div>
    <DxHeading1>Cookbook 📙</DxHeading1>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2">
      <DxLink v-for="recipe in cookbook" :to="`/recipes/${recipe.id}`">
        <img class="w-full h-32 object-cover" :src="recipe.image" />
        {{ recipe.name }}
      </DxLink>
    </div>
  </div>
</template>
