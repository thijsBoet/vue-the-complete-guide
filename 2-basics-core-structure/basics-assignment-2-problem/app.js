const app = Vue.createApp({
  data() {
    return {
      alertText: "Clicked ME!",
      userInput: "",
      userInputEnter: ""
    }
  },
  methods: {
    clickedMe() {
      alert(this.alertText);
    },
    outputUserInput(e) {
      this.userInput = e.target.value
    },
    outputUserInputOnEnter(e) {
      this.userInputEnter = e.target.value;
    }
  },
});

app.mount("#assignment");