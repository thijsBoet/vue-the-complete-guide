const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
    };
  },

  // computed: {
  //   fullname() {
  //     if (this.name === '' || this.lastName === '') {
  //       return ''
  //     } else {
  //       return this.name + " " + this.lastName
  //     }
  //   },
  // },

  watch: {
    counter(value) {
      if (value >= 50|| value <=-50) {
        this.counter = 0;
      }
    },
    name(value) {
      if (value === "") {
        this.fullname = '';
      } else {
        this.fullname = value + " " + this.lastName
      }
    },
    lastName(value) {
      if (value === "") {
        this.fullname = '';
      } else {
        this.fullname = this.name + " " + value;
      }
    }
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
      this.lastName = "";
    },
  },
});

app.mount('#events');
