<script setup lang="ts">
defineProps<{ rating: { josh: number, ellie: number} }>();
</script>

<template>
  <DxHeading2>Ratings ⭐️</DxHeading2>
  <p>Josh: <template v-for="n in rating.josh">⭐️</template></p>
  <p>Ellie: <template v-for="n in rating.ellie">⭐️</template></p>
</template>
