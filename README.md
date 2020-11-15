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
### Add methods and mount component on HTML element
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
```HTML
<li v-for="goal in goals">{{ goal }}</li>
```
### Render attributes in HTML
All values not between HTML tags must have a v-for: tag added
```HTML
<a v-bind:href="vueLink">about Vue</a>
```
### Render HTML in variables
* To prevent cross-side scripting attacks HTML tags are ignored in variables
* To circumvent this use the v-html="" directive
```javascript
const HTMLtags = "<h2>Heading</h2>"
<p v-html="vueLink">{{ HTMLtags }}</p>
```
### Vue event listeners and directives
* To use an event listener on a HTML tag, add the v-on:event as an attribute
```HTML
<button v-on:click="addGoal">Add Goal</button>
```
* Directives can be added to further specify behaviour
```HTML
<!-- Only when middle mouse button is clicked -->
<button v-on:click.middle="reduce(5)">Add 5</button>
<!-- Only when ENTER is keydown -->
<button v-on:keydown.enter="addGoal">Add Goal</button>
<!-- Other Vue key codes: .enter .tab .tab .delete .esc .space .up .down .left .right -->
```
* Event modifiers can modify the way events are executed, like prevent default or stop propagation.
```HTML
<form v-on:submit.prevent="submitForm">
<form v-on:submit.stop="submitForm">
```
## Two way data binding 
* The v-model shorthand can establish two way binding (both listening and writing on the value)
```HTML
<!-- longhand -->
<input type="text" v-bind:value="variableValue" v-on:input="inputVariableEvent">
<!-- shorthand -->
<input type="text" v-model="variableName">
```
## Regular, computed and watch methods
### Computed Methods
* Executing methods in the HTML code results in reloading everything on every event, because Vue cannot tell its dependencies. 
```HTML
<p>Your Name: {{fullname()}}</p>
```
* To prevent this use computed methods in the createApp object.
```javascript
  computed: {
    fullname() {
      return this.name !== "" ? this.name + " " + "Boet" : "";
    },
  },
```
* Don't use () when calling these computed methods
### Watchers
* To have even more control over the variables used in these methods. Use watch methods.
```javascript
  watch: {
    // Value in data object to watch. It's value (this.name) is given as an argument.
    name(value) {
      // variables to change when value is changed
      this.fullname = value + " Gates"
    }
  },
```
* An new Value and old Value can also be given as two arguments
```javascript
watch: {
    data(newValue, oldValue) {
      
    }
  },
```
* Watchers exceed in watching for certain conditions(hence the name)
```javascript
watch: {
  counter(value) {
  if (value >= 50|| value <=-50) {
    this.counter = 0;
  }
},
```
* Examples like sending HTTP request and setting timers are great methods that can be triggered by watchers.
### Methods vs Computed vs Watch
* Methods are great for data binding or event binding, they are re-rendered every cycle
* Computed method are great if you want to calculate some output value dynamically. Data based on depended data that needs to be re-executed when the dependant data changes.
* Watchers are great when code needs to be executed, because a property changes and you want to specify this change precisely.
## Shorthand for v-on and v-bind
* v-on: can be replaced with @
```HTML
<button v-on:click="clickAdd(5)">Add 5</button>
<button @click="clickAdd(5)">Add 5</button>
```
* v-bind can be replaced with :
```HTML
<div v-bind:class="{ active: isActive }"></div>
<div :class="{ active: isActive }"></div>
```
## Class and Style Bindings
### Inline Styling
* You can use :style="{camelCasedProperty: value}" directive to add inline styles. They overwrite all other styles therefore usually bad practice.
### :class directive
* To add regular classes add an object (inline HTML, ternary, array or computed) to the :class directive.
```HTML
<!-- Inline -->
<div :class="{ className: true/false, 'text-danger': hasError }"></div>
<!-- Ternary -->
<div v-bind:class="isActive ? activeClass : '', errorClass"></div>
<!-- Array -->
<div v-bind:class="[isActive ? activeClass : '', errorClass]"></div>
```
```javascript
// Computed
computed: {
  paraClasses() {
    return {
      visible: this.paragraphIsVisible,
      hidden: !this.paragraphIsVisible,
    };
  }
},
```
## Conditional Rendering & Lists
### Conditionals using v-if/v-show and v-else directive
* Use v-if directive, to conditionally rendered HTML.
```HTML
<p v-if="goals.length === 0">Please add some goals!</p>
```
* Use v-else directive, to render the else condition. (must be used directly after v-if condition)
```HTML
<ul v-else>
  <li>{{goal}}</li>
</ul>
```
* Without the else condition v-show can be used which doesn't remove the HTML conditionally, but hides it, using "display: none" css.
* Best used when visibility status changes a lot, like a toggle visibility button. (better performance)
```HTML
<p v-show="goals.length === 0">Please add some goals!</p>
```
### Loop over Lists
* Use v-for directive to loop over lists.
* We only have access to the looped variable inside the HTML element.
* Using "(variable, index) in variables" we can access the index.
```HTML
<ul>
  <li v-for="(goal, index) in goals">{{ goal }} - {{ index }}</li>
</ul>
```
* We can also loop through objects.
* Using "(value, key) in object" we can access the key name.
```HTML
person = {name: 'Bill', age: 65}
<ul>
  <li v-for="(value, key, index) in person">{{ key }}: {{ person }}</li>
</ul>
```
* We can also loop through a range of numbers with v-for
```HTML
<ul>
  <li v-for="num in 100">{{ num }}</li>
</ul>
```
### Remove items from Lists
* We can add an @click method to every v-for iterations. 
* Every iteration can receive an index from the v-for loop.
```HTML
<ul>
  <li v-for="(goal, index) in goals" @click="removeGoal(index)">{{ goal }}</li>
</ul>
```
### Lists and keys