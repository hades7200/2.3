<template>
    <div>{{ message }}</div>
  </template>
  <script setup>
  let message = 'Hello, Vue!';
  watchEffect(() => {
    // Watcher logic
  });
  </script>
  