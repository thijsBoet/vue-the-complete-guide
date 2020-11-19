const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: 1,
          name: "Manuel Lorenz",
          phone: "01234 5678 991",
          email: "manuel@gmail.com",
        },
        {
          id: 2,
          name: "Julie Jones",
          phone: "09876 543 221",
          email: "julie@outlook.com",
        },
        {
          id: 3,
          name: "Bill Gates",
          phone: "0356 4878 891",
          email: "billgates@microsoft.com",
        },
        {
          id: 4,
          name: "Elon Musk",
          phone: "1114 5695 009",
          email: "elon@spacex.com",
        },
      ],
    };
  },
  
});

// Component
// Always use multi-word identifiers with a dash in between
// To prevent name collisions with HTML tags ('e.g. form, input')
// Second argument is a config object just like in Vue.createApp({})
app.component("friend-contact", {
  template: `
    <li>
      <h2>{{friend.name}}</h2>
      <button @click=toggleDetails>{{detailsAreVisible ? 'Hide' : 'Show'}}</button>
      <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong> {{friend.phone}}</li>
        <li><strong>Email:</strong> {{friend.email}}</li>
      </ul>
    </li>
  `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: 3,
        name: "Bill Gates",
        phone: "0356 4878 891",
        email: "billgates@microsoft.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount('#app');
