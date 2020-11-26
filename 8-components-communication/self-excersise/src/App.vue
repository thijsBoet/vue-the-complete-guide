<template>

  <section>
    <add-user></add-user>
    <list-users
      v-for="(user) in users"
      :key="user.id"
      :id="user.id"
      :username="user.username"
      :phone="user.phone"
      :email="user.email"
    >
      <ul>

      </ul>
    </list-users>
  </section>

</template>

<script>

export default {
  data () {
    return {
      users: [
        {
          id: 'Bill',
          username: 'Bill Gates',
          phone: '0123 45678 90',
          email: 'bill.gates@microsoft.com'
        },
        {
          id: 'Elon',
          username: 'Elon Musk',
          phone: '0987 654421 21',
          email: 'elon.musk@spacex.com'
        },
        {
          id: 'Larry',
          username: 'Larry Page',
          phone: '1233 63221 56',
          email: 'larry.page@google.com'
        },
        {
          id: 'Mark',
          username: 'Mark Zuckerberg',
          phone: '1257 64451 21',
          email: 'mark.zuckerberg@facebook.com'
        },
        {
          id: 'Steve',
          username: 'Steve Jobs',
          phone: '5698 56782 69',
          email: 'steve.jobs@apple.com'
        }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
