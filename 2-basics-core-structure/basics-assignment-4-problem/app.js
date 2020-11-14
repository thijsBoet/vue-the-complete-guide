const app = Vue.createApp({
  data() {
    return {
      inputClass: "",
      paragraphIsVisible: true,
      inputBackgroundColor: "",
    };
  },
  methods: {
    toggleParagraphVisibility() {
      return (this.paragraphIsVisible = !this.paragraphIsVisible);
    },
    returnInlineStyle() {
      return this.input2
    }
  },
  computed: {
    paraClasses() {
      return {
        user1: this.inputClass === 'user1',
        user2: this.inputClass === 'user2',
        visible: this.paragraphIsVisible,
        hidden: !this.paragraphIsVisible,
      };
    }
  },
}).mount("#assignment");