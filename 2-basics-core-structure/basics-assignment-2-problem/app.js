const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
      confirmedName: "",
    };
  },
  methods: {
    reduce(num) {
      this.counter = this.counter - num;
    },
    reset() {
      this.counter = 0;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    setName(event) {
      this.name = event.target.value;
    },
    setConfirmedName(event) {
      this.confirmedName = event.target.value;
    },
    setLastName(event) {
      this.lastName = event.target.value;
    },
  },
});

app.mount('#events');
