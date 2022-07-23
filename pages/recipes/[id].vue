<script setup lang="ts">
const route = useRoute();

const cookbook = useCookbook();
const recipe = computed(() => {
  return cookbook.find((x) => x.id === route.params.id);
});
</script>

<template>
  <div>
    <DxLink to="/">Home</DxLink>
    <DxHeading1>Timers ⏰</DxHeading1>
    <Timer></Timer>
    <template v-if="recipe != null">
      <DxHeading1>{{ recipe.name }}</DxHeading1>
      <div class="flex">
        <div class="w-1/3">
          <RecipeIngredients :ingredients="recipe.ingredients" />
        </div>
        <div class="w-2/3">
          <RecipeDirections :directions="recipe.directions" />
          <RecipeImage :image="recipe.image" />
          <RecipeRatings :rating="recipe.rating" />
          <DxHeading2>Links 🖇</DxHeading2>
          <ul>
            <li v-for="alksdjf in recipe.links">
              <DxLink :to="alksdjf.url">{{ alksdjf.name }}</DxLink>
            </li>
          </ul>
        </div>
      </div>
    </template>
    <template v-else>
      <DxHeading1> Not found. </DxHeading1>
      <DxText> Recipe not found. </DxText>
    </template>
  </div>
</template>
