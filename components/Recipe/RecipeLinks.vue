<script setup lang="ts">
defineProps<{ links: Array<{ url: string; name: string }> }>();
</script>

<template>
  <DxHeading2>Links 🖇</DxHeading2>
  <ul>
    <li v-for="alksdjf in links">
      <DxLink :to="alksdjf.url">{{ alksdjf.name }}</DxLink>
    </li>
  </ul>
</template>
