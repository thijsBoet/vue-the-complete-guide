const app = Vue.createApp({
  data() {
    return {
      inputText: "",
      tasks: [],
      toggleClicked: true,
    }
  },
  methods: {
    addTask() {
      this.tasks.push(this.inputText);
    },
    toggleList() {
      this.toggleClicked = !this.toggleClicked;
    }
  },
})

app.mount("#assignment")