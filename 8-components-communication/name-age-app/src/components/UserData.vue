<template>
  <form @submit.prevent="submitData">
    <div>
      <label for="name">Name: </label>
      <input type="text" id="name" v-model="enteredName"/>
    </div>
    <div>
      <label for="age">Age: </label>
      <input type="number" id="age" v-model="enteredAge"/>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      enteredName: "",
      enteredAge: ""
    }
  },
  methods: {
    submitData(){
      this.$emit('add-user', this.enteredName, this.enteredAge)
    }
  },
};
</script>
