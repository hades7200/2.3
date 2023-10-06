<template>
    <div>
      <div>{{ message }}</div>
      <div v-html="htmlContent"></div>
      <button :id="btnId">Click me</button>
      <div>{{ count * 2 }}</div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        message: "Hello, Vue!",
        htmlContent: "<p>This is <strong>bold</strong> text.</p>",
        btnId: "my-button",
        count: 5
      };
    }
  };
  </script>
  