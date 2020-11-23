<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }}</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone: </strong>{{ friend.phone}}</li>
      <li><strong>Email: </strong>{{ friend.email}}</li>
    </ul>
  </li>
</template>

<script>
export default {
  data() {
      return {
      detailsAreVisible: false,
      friend: {
        id: 4,
        name: "Elon Musk",
        phone: "1114 5695 009",
        email: "elon@spacex.com",
      },
    }
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    }
  },
}
</script>

