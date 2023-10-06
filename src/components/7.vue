<template>
    <div>
      <h2>Event Handling Examples</h2>
  
      <!-- Listening to Events [v-on:click] -->
      <button @click="handleClick">Click me</button>
  
      <!-- Inline Handlers -->
      <button @click="counter++">Increment</button>
  
      <!-- Method Handlers -->
      <button @click="incrementCounter">Increment</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        counter: 0,
      };
    },
    methods: {
      handleClick() {
        alert("Button clicked!");
      },
      incrementCounter() {
        this.counter++;
      },
    },
  };
  </script>
  