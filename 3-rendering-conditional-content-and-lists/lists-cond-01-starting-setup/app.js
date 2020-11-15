const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: '',
      goals: [],
      person : {name: 'Bill', age: 65},
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);
      this.enteredGoalValue = '';
    },
    removeGoal(index) {
      this.goals.splice(index, 1)
    }
  },
});

app.mount('#user-goals');

