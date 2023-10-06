<template>
    <div>{{ doubleCount }}</div>
  </template>
  <script setup>
  import { ref, computed } from 'vue';
  const count = ref(5);
  const doubleCount = computed(() => count.value * 2);
  </script>
  