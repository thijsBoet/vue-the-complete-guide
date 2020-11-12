const app = Vue.createApp({
  data() {
    return {
      name: "Matthijs Boet",
      age: 39,
      image: "https://memegenerator.net/img/instances/69508134.jpg",
    };
  },
  methods: {
    agePlusFive() {
      return this.age +5
    },
    randomNumberBetweenZeroAndOne() {
      return Math.random()
    }
  },
})

app.mount("#assignment")