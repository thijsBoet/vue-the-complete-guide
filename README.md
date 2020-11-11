# Vue - The Complete Guide (w/ Router, Vuex, Composition API)
Created by Maximilian Schwarzmüller

https://www.udemy.com/course/vuejs-2-the-complete-guide/

## Vue advantages
* Not reinventing the wheel
* Faster rendering e.g. shadowDOM and less page re-renders
* Easier working in a team due to best practices and common features

## Vue Alternatives
* React
* Angular
* Svelte

## Vue Basic Setup
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
```
* To reference variables use the this keyword
```javascript
      this.goals.push(this.enteredValue);
      this.enteredValue = "";
    }
  },
}).mount("#app");
```
## Vue Data Binding
### v-on:click (e listener) and v-for (for in loop) HTML VUE bindings
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
All values not between HTML tags must have a v-for: tag added
```javascript
<a v-bind:href="vueLink">about Vue</a>
```
### Render HTML in variables
* To prevent cross-side scripting attacks HTML tags are ignored in variables
* To circumvent this use the v-html="" directive
```javascript
const HTMLtags = "<h2>Heading</h2>"
<p v-html="vueLink">{{ HTMLtags }}</p>
```