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
    <template v-if="recipe != null">
      <DxHeading1>{{ recipe.name }}</DxHeading1>
      <div class="flex lg:flex-row flex-col gap-2 xl:gap-8">
        <div class="basis-52 shrink-0">
          <RecipeIngredients :ingredients="recipe.ingredients" />
        </div>
        <div>
          <RecipeDirections :directions="recipe.directions" />
        </div>
        <div class="basis-44 shrink-0">
          <TimerSection />
          <RecipeRatings :rating="recipe.rating" />
          <RecipeLinks :links="recipe.links" />
          <RecipeImage :image="recipe.image" />
        </div>
      </div>
    </template>
    <template v-else>
      <DxHeading1> Not found. </DxHeading1>
      <DxText> Recipe not found. </DxText>
    </template>
  </div>
</template>
