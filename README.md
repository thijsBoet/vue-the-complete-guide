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
```
* To reference variables use the this keyword
```javascript
  methods: {
    addGoal() {
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
## Vue event listeners and directives
* To use an event listener on a HTML tag, add the v-on:event as an attribute
```javascript
<button v-on:click="addGoal">Add Goal</button>
```
* Directives can be added to further specify behaviour
```javascript
// Only when middle mouse button is clicked
<button v-on:click.middle="reduce(5)">Add 5</button>
// Only when ENTER is keydown
<button v-on:keydown.enter="addGoal">Add Goal</button>
// Other Vue key codes: .enter .tab .tab .delete .esc .space .up .down .left .right
```
* Event modifiers can modify the way events are executed, like prevent default or stop propagation.
```javascript
<form v-on:submit.prevent="submitForm">
<form v-on:submit.stop="submitForm">
```