<script setup lang="ts">
import { parseDirections, isParsedTimer } from "~~/utils/directions";

const props = defineProps<{ directions: Array<string> }>();

const parsedDirections = computed(() =>
  props.directions.map((x) => parseDirections(x))
);
</script>

<template>
  <Heading2>Directions</Heading2>
  <Text v-for="directionsSplit in parsedDirections">
    <template v-for="directionsSlice in directionsSplit">
      <TimerInDirections
        v-if="isParsedTimer(directionsSlice)"
        :text="directionsSlice"
      ></TimerInDirections>
      <template v-else>{{ directionsSlice }}</template>
    </template>
  </Text>
</template>
