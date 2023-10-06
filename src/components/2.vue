<template>
    <button @click="incrementCounter">Increment</button>
    </template>
    
    <script>
     export default {
        data() {
          return {
            counter: 0
          };
        },
        methods: {
          incrementCounter() {
            this.counter++;
          }
        }
      };
    </script>
    