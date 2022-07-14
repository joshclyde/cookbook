<script setup lang="ts">
const cookbook = useCookbook();
</script>

<template>
  <div>
    <Heading1>Cookbook</Heading1>
    <div v-for="recipe in cookbook">
      <Link :to="`/recipes/${recipe.id}`">
        {{ recipe.name }}
      </Link>
    </div>
  </div>
</template>
