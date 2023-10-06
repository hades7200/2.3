<template>
    <div>
      <div :class="{ 'active': isActive }">Vue is awesome!</div>
      <div :style="{ color: textColor, 'font-size': fontSize + 'px' }">Styled text</div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isActive: true,
        textColor: 'blue',
        fontSize: 16
      };
    }
  };
  </script>
  