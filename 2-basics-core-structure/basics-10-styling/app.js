const app = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    }
  },
  computed: {
    boxBClasses() {
      return {active: this.boxBSelected}
    }
  },
  methods: {
    boxSelected(box) {
      if (box === 'A') this.boxASelected = !this.boxASelected;
      if (box === 'B') return (this.boxBSelected = !this.boxASelected);
      if (box === 'C') this.boxCSelected = !this.boxCSelected;
    }
  },
})

app.mount("#styling")