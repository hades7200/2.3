<template>
    <div>
      <h2>Form Input Binding Examples</h2>
  
      <!-- v-model with <input type="text"> -->
      <label for="textInput">Text Input:</label>
      <input type="text" id="textInput" v-model="textValue" />
  
      <!-- v-model with <input type="checkbox"> -->
      <label for="checkboxInput">Checkbox:</label>
      <input type="checkbox" id="checkboxInput" v-model="isChecked" />
  
      <!-- v-model with <input type="radio"> -->
      <div>
        <label for="radioInput1">Radio 1:</label>
        <input type="radio" id="radioInput1" value="option1" v-model="selectedOption" />
      </div>
      <div>
        <label for="radioInput2">Radio 2:</label>
        <input type="radio" id="radioInput2" value="option2" v-model="selectedOption" />
      </div>
  
      <!-- v-model with <select> -->
      <label for="selectInput">Select:</label>
      <select id="selectInput" v-model="selectedValue">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
  
      <!-- v-model with <textarea> -->
      <label for="textareaInput">Textarea:</label>
      <textarea id="textareaInput" v-model="textareaValue"></textarea>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        textValue: "",
        isChecked: false,
        selectedOption: "",
        selectedValue: "",
        textareaValue: "",
      };
    },
  };
  </script>
  