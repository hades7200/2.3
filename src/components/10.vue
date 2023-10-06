<template>
    <div>
      <h2>Vue Components Example</h2>
  
      <!-- Props -->
      <child-component :message="parentMessage" @custom-event="handleEvent" />
  
      <!-- Slots -->
      <custom-component>
        <template #header>
          <h3>This is a custom header</h3>
        </template>
        <template #default>
          <p>Slot content goes here.</p>
        </template>
      </custom-component>
    </div>
  </template>
  
  <script>
  import ChildComponent from "@/components/ChildComponent.vue";
  import CustomComponent from "@/components/CustomComponent.vue";
  
  export default {
    components: {
      ChildComponent,
      CustomComponent,
    },
    data() {
      return {
        parentMessage: "Hello from Parent",
      };
    },
    methods: {
      handleEvent(data) {
        alert(`Custom event emitted with data: ${data}`);
      },
    },
  };
  </script>
  