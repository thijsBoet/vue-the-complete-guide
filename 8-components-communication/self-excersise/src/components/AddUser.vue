<template>
  <form @submit.prevent="submitUser">
    <div>
      <label for="name">Username: </label>
      <input id="name" type="text" placeholder="Username">
    </div>
    <div>
      <label for="tel">Phone: </label>
      <input id="tel" type="tel" placeholder="Phonenumber">
    </div>
    <div>
      <label for="email">Email: </label>
      <input id="email" type="email" placeholder="Email">
    </div>
  </form>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    id: String,
    username: String,
    phone: String,
    email: String
  }
}
</script>


