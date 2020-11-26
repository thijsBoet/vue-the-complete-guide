<template>
  <section>
    <header>
      <h1>My Users</h1>
    </header>
    <active-user v-for="user in users" :key="user.id" :id="user.id" :name="user.name" :age="user.age"></active-user>
    <user-data></user-data>
  </section>
</template>

<script>
export default {
  data() {
    return {
      users: [
        {
          id: "1",
          name: "Bill Gates",
          age: "65",
        },
      ],
    };
  },
  methods: {
    
  },
};
</script>
