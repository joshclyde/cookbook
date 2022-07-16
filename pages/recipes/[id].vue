<script setup lang="ts">
const route = useRoute();

const cookbook = useCookbook();
const recipe = computed(() => {
  return cookbook.find((x) => x.id === route.params.id);
});
</script>

<template>
  <div>
    <Link to="/">Home</Link>
    <Heading1>Timers</Heading1>
    <Timer></Timer>
    <template v-if="recipe != null">
      <Heading1>{{ recipe.name }}</Heading1>
      <div class="flex">
        <div class="w-1/3">
          <Heading2>Ingredients</Heading2>
          <ul>
            <li v-for="ingredient in recipe.ingredients">
              {{ ingredient }}
            </li>
          </ul>
        </div>
        <div class="w-2/3">
          <Heading2>Directions</Heading2>
          <Text v-for="step in recipe.directions">{{ step }}</Text>
          <Heading2 v-if="recipe.image.length > 0">Images</Heading2>
          <img class="w-32 h-32" :src="recipe.image" />
          <Heading2>Ratings</Heading2>
          <p>Josh: <template v-for="n in recipe.rating.josh">⭐️</template></p>
          <p>
            Ellie: <template v-for="n in recipe.rating.ellie">⭐️</template>
          </p>
          <Heading2> Links </Heading2>
          <ul>
            <li v-for="alksdjf in recipe.links">
              <Link :to="alksdjf.url">{{ alksdjf.name }}</Link>
            </li>
          </ul>
        </div>
      </div>
    </template>
    <template v-else>
      <Heading1> Not found. </Heading1>
      <Text> Recipe not found. </Text>
    </template>
  </div>
</template>
