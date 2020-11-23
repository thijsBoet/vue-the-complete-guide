<template>
  <section>
    <h2>Name: </h2>
    <h3>Age: </h3>
  </section>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      required: true
    },
    age: {
      type: String,
      required: true
    }
  }
}
</script>