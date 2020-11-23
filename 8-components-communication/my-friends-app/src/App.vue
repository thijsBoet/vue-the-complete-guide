<template>
  <section>
    <header>
      <h1>My Friends</h1>
    </header>
    <ul>
      <new-friend @add-contact="addContact"></new-friend>
      <friend-contact
        v-for="friend in friends"
        :key="friend.id"
        :id="friend.id"
        :name="friend.name"
        :phone-number="friend.phone"
        :email-address="friend.email"
        :is-favorite="friend.isFavorite"
        @toggle-favorite="toggleFavoriteStatus"
        @delete="deleteContact"
      ></friend-contact>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
    friends: [
        {
          id: "Bill",
          name: "Bill Gates",
          phone: "0123 45678 90",
          email: "bill.gates@microsoft.com",
          isFavorite: true,
        },
        {
          id: "Elon",
          name: "Elon Musk",
          phone: "0987 654421 21",
          email: "elon.musk@spacex.com",
          isFavorite: true,
        },
        {
          id: "Larry",
          name: "Larry Page",
          phone: "1233 63221 56",
          email: "larry.page@google.com",
          isFavorite: true,
        },
        {
          id: "Mark",
          name: "Mark Zuckerberg",
          phone: "1257 64451 21",
          email: "mark.zuckerberg@facebook.com",
        },
        {
          id: "Steve",
          name: "Steve Jobs",
          phone: "5698 56782 69",
          email: "steve.jobs@apple.com",
          isFavorite: true,
        },
      ],
    };
  },
  methods: {
    toggleFavoriteStatus(friendId) {
      const identifiedFriend = this.friends.find(
        (friend) => friend.id === friendId
      );
      identifiedFriend.isFavorite = !identifiedFriend.isFavorite;
    },
    addContact(name, phone, email){
      const newFriendContact = {
        id: new Date().toISOString(),
        name: name,
        phone: phone,
        email: email,
        isFavorite: false
      };
      this.friends.push(newFriendContact);
    },
    deleteContact(friendId){
      this.friends = this.friends.filter((friend) => friend.id !== friendId);
    }
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: "Jost", sans-serif;
}
body {
  margin: 0;
}
header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}
#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}
#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
