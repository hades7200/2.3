<template>
    <div>
      <h2>List Rendering Examples</h2>
  
      <!-- v-for with an Array -->
      <ul>
        <li v-for="(item, index) in items" :key="index">{{ item }}</li>
      </ul>
  
      <!-- v-for with v-if -->
      <ul>
        <li v-for="item in items" v-if="item !== 'Item 2'" :key="item">{{ item }}</li>
      </ul>
  
      <!-- v-for with a Component -->
      <ul>
        <custom-item
          v-for="(item, index) in items"
          :key="index"
          :text="item"
        ></custom-item>
      </ul>
    </div>
  </template>
  
  <script>
  import CustomItem from "@/components/CustomItem.vue";
  
  export default {
    components: {
      CustomItem,
    },
    data() {
      return {
        items: ["Item 1", "Item 2", "Item 3"],
      };
    },
  };
  </script>
  