<script setup lang="ts">
import { parseDirections, isParsedTimer } from "~~/utils/directions";

const props = defineProps<{ directions: Array<string> }>();

const parsedDirections = computed(() =>
  props.directions.map((x) => parseDirections(x))
);
</script>

<template>
  <DxHeading2>Directions 🗺</DxHeading2>
  <template v-for="directionsSplit in parsedDirections">
    <DxText>
      <template v-for="directionsSlice in directionsSplit">
        <TimerInDirections
          v-if="isParsedTimer(directionsSlice)"
          :text="directionsSlice"
        ></TimerInDirections>
        <template v-else>{{ directionsSlice }}</template>
      </template>
    </DxText>
    <br />
  </template>
</template>
