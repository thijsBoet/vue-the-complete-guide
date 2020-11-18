const app = Vue.createApp({
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
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
      console.log(this.$refs.userText);
      console.dir(this.$refs.userText);
    },
  },
  beforeCreate () {
    console.log('beforeCreate(eg. HTTP request)');
  },
  created() {
    console.log('created()')
  },
  beforeMount () {
    console.log("beforeMount()");
  },
  mounted () {
    console.log("mounted()");
  },
  beforeUpdate () {
    console.log("beforeUpdate(changes not yet rendered)");
  },
  updated () {
    console.log("updated(updated changes rendered)");
  },
  beforeUnmount () {
    console.log("before unmount");
  },
  unmounted() {
    console.log("unmounted")
  }
});

app.mount('#app');
setTimeout(() => app.unmount("#app"), 3000);

let message = 'Hello!';
let longMessage = message + ' World!'
// console.log(longMessage);

// message Hello! isn't altered though the variable is changed
// because the calculation "message + ' World!" isn't re-executed
// therefor JS isn't reactive like Vue
message = "Hello!!!!!!!";
// console.log(longMessage);

// Vue creates this re-activity with a feature called Proxies
const data = {
  message: 'Hello',
  longMessage: "Long message"
}

const handler = {
  set(target, key, value) {
    // original data object
    // console.log(target);
    // property of value
    // console.log(key);
    // new value of data property
    // console.log(value);
    
    // create re-activity
    if (key === 'message') {
      target.longMessage = value + " World!"
    }
    target.message = value;
  }
}

const proxy = new Proxy(data, handler);
proxy.message = "Hello!!!"

// console.log(proxy.longMessage);

// We can create multiple apps
const app2 = Vue.createApp({
  // alternative for inline HTML
  template: `
    <p>{{ favoriteMeal }}</p>
    `,
  data() {
    return {
      favoriteMeal: "Pizza",
    };
  },
});

app2.mount("#app2");

// ## Vue Lifecycle Instances: execute code at a certain point int he lifecycle 
// 1. createApp({})
// 2. beforeCreate()
// 3. created()      => knows data object nothing rendered yet
// Compiling template
// 4. beforeMount()  => right before rendering
// 5. mounted()      => hands down instructions to the browser that renders it
// Mounted Vue Instance
// Data Changes
// 6. beforeUpdate()
// 7. updated()      => rendered on screen, because it is already mounted
// Instance can be Unmounted
// 8. beforeUnmount()
// 9. unmounted()