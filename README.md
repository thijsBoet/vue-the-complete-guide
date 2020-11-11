# Vue - The Complete Guide (w/ Router, Vuex, Composition API)
Created by Maximilian Schwarzmüller

https://www.udemy.com/course/vuejs-2-the-complete-guide/

## Vue advantages
* Not reinventing the wheel
* Faster rendering e.g. shadowDOM and page re*renders
* Easier working in a team due to common practices

## Vue Alternatives
* React
* Angular
* Svelte

## Vue Syntax
### Create App
```javascript
Vue.createApp();
```
### Add data
```javascript
Vue.createApp({
  data() {
    return {
      enteredValue: "",
      courseGoals: ["Finish the course and learn Vue!"],
      vueLink: "https://vuejs.org/",
    };
  },
});
```
### Add methods and mount component on html element
```javascript
const app = Vue.createApp({
  data() {
    return {
      enteredValue: "",
      courseGoals: ["Finish the course and learn Vue!"],
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = "";
    }
  },
}).mount("#app");
```
### Mounted app, v-on:click and v-for HTML VUE bindings
```HTML
<div id="app">
  <div>
    <label for="goal">Goal</label>
    <input type="text" id="goal" v-model="enteredValue"/>
    <button v-on:click="addGoal">Add Goal</button>
  </div>
  <ul>
    <li v-for="goal in goals">{{ goal }}</li>
  </ul>
</div>
```
### Render Values between HTML tags
```javascript
<li v-for="goal in goals">{{ goal }}</li>
```
### Render attributes in HTML
```javascript
<a v-bind:href="vueLink">about Vue</a>
```