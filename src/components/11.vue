<template>
    <div>
      <h2>Vue Router Example</h2>
  
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
  
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  export default {
    // This component will be used as a container for routing.
  };
  </script>
  