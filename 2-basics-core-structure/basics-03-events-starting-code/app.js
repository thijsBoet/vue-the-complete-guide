const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },

  computed: {
    fullname() {
      return this.name !== "" ? this.name + " " + "Boet" : "";
    },
  },
  
  methods: {
    clickSubtract(num) {
      this.counter = this.counter - num;
    },
    clickAdd(num) {
      this.counter = this.counter + num;
    },
    resetName() {
      this.name = "";
    },
  },
});

app.mount('#events');
