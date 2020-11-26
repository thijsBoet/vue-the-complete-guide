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
// To reference variables in createApp use the this keyword!
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
## Computed and watch methods
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
### Conditionals using v-if/v-show, v-else-if and v-else directive
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
* Without the else condition v-show can be used which doesn't remove the HTML conditionally, but hides it, using "display: none" css selector.
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
* To add an unique identifier to every item in the for loop bind the :key directive to the HTML.
* This is considered good practice and prevent bugs with changing indexes.
```HTML
<ul>
  <li v-for="(goal, index) in goals" :key="index">{{ goal }}</li>
</ul>
```
## Vue Lifecycle Instances: execute code at a certain point in he lifecycle 
1. createApp({})
2. beforeCreate()
3. created()      => knows data object nothing rendered yet
Compiling template
4. beforeMount()  => right before rendering
5. mounted()      => hands down instructions to the browser that renders it
Mounted Vue Instance
Data Changes
6. beforeUpdate()
7. updated()      => rendered on screen, because it is already mounted
Instance can be Unmounted
8. beforeUnmount()
9. unmounted()
```javascript
app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.$refs.userText.value;
    },
  },
  beforeCreate () {
    console.log('beforeCreate(eg. HTTP request)');
  },
  created() {
    console.log('created(data and methods loaded, but no rendering)')
  },
  beforeMount () {
    console.log("beforeMount(just before rendering app)");
  },
  mounted () {
    console.log("mounted(rendering app)");
  },
  beforeUpdate () {
    console.log("beforeUpdate(changes not yet rendered)");
  },
  updated () {
    console.log("updated(updated changes rendered, because already mounted)");
  },
  beforeUnmount () {
    console.log("beforeUnmount(just before unmounting)");
  },
  unmounted() {
    console.log("unmounted(app unmounted)")
  }
}).mount('#app');;

setTimeout(() => app.unmount("#app"), 3000);
```
## Components
### We use components to divide up code in smaller re-usable pieces
* Always use multi-word identifiers with a dash in between
* To prevent name collisions with HTML tags ('e.g. form, input')
* Second argument is a config object just like in Vue.createApp({})
* We use a template to interpolate data into the HTML
* We define the data we want to render in the data object
```javascript
app.component("friend-contact", {
  template: `
    <li>
      <h2>{{friend.name}}</h2>
      <button @click=toggleDetails>{{detailsAreVisible ? 'Hide' : 'Show'}}</button>
      <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong> {{friend.phone}}</li>
        <li><strong>Email:</strong> {{friend.email}}</li>
      </ul>
    </li>
  `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
          id: 3,
          name: "Bill Gates",
          phone: "0356 4878 891",
          email: "billgates@microsoft.com",
        },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});
```
* We use the "friend-contact" identifier as an HTML tag to hook it up
```HTML
<section id="app">
  <ul>
    <friend-contact></friend-contact>
  </ul>
</section>
```
## Vue CLI
### Advantages over CDN import
1. Auto detects changes and reloads browser page
2. Better auto-completion in IDE
3. Splits code into multiple files and export/import via ES modules
### Creating and running Vue cli App
* We create an app with the Vue cli entering "vue create vue-app-name" into the terminal
* We run the app by moving into the app folder and running "npm run serve" or "yarn serve" in the terminal
### Exploring folder and file structure of the App
* The src folder contains all files we are going to write code in
* main.js & App.vue are the entry point of the app
* package.json lists all the dependencies that are installed into the node_modules folder and the scripts that can be run like "serve, build and lint"
```javascript
// ========== main.js ============
// Vue.createApp({}) is imported
import { createApp } from 'vue'
// Entry point App.vue is imported
import App from './App.vue'

// App is mounted into public/index.html '#app'
createApp(App).mount('#app');
```
### App.vue
* App.vue is structured into three main parts
1. "template" contains the injected HTML
2. "script" contains the data object, components and other JS 
3. "style" contains general style information
```HTML
<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  ...
  margin-top: 60px;
}
</style>
```
### main.js
```javascript
import { createApp } from 'vue';
// Import child components
import App from './App.vue';
import UserContact from './components/UserContact.vue';
import NewUser from './components/NewUser.vue';
// Create app
const app = createApp(App);
// Mount child components of app
app.component('user-contact', UserContact);
app.component('new-user', NewUser);
// Mount app in HTML id #app
app.mount('#app');
```
## Component communication
### Parent => Child communication
* We use props to communicate with child components
* Parent component
```HTML
<!-- Use kebab-case for properties -->
<user-contact
  v-for="user in users"
  :key="user.id"
  :id="user.id"
  :name="user.name"
  :phone-number="user.phone"
  :mailing-list=user.mailing,
  :email-address="user.email"
></user-contact>
```
* Child component
```javascript
// Use camelCase for properties to comply with JS standard
props: ["name", "phoneNumber", "emailAddress"],
// More specific tests using object
props: {
    id: { type: Number, required: true, },
    name: String,
    phoneNumber: { type: String, required: true, },
    emailAddress: { type: String, required: true,
      validator: (value) =>
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          value)? true : false,},
    mailingList: {Boolean, required: false, default: false}
  },
```
* Now we can access these properties in the child component using {{name}} {{phoneNumber}} and {{emailAddress}}
### Changing Props
* Props should be only mutated in the parent component, because Vue uses the uni-directional dataflow concept
* To change parent properties with child components use click listeners with the $emit keyword to emit an event in the parent app and the parents data
* Child component
```HTML
<li>
  <strong v-if="mailingList">Wants to receive monthly Email</strong>
  <button @click="toggleMailingStatus">Toggle Mail List</button>
</li>
```
``` javascript
methods: {
  toggleMailingStatus() {
    this.$emit("toggle-mailing-list", this.id);
  },
}
```
* Parent component
```HTML
<user-contact
  :mailing-list=user.mailing,
  :email-address="user.email"
  @toggle-mailing-list="toggleMailingStatus"
></user-contact>
```
```javascript
toggleMailingStatus(userId) {
  const identifiedUser = this.users.find(user => user.id === userId);
  identifiedUser.mailingList = !identifiedUser.mailingList;
},
```