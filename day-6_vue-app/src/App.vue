<template>
  <section>
    <header>
      <h1>My Friend List</h1>
    </header>

    <!--! Step 4: Once you add the component in main.js you can call it here like so -->
    <new-friend @add-contact="addContact" />

    <ul>
      <!-- 
        The props values are called from our FriendContact.vue file under props 
      -->
     <friend-contact 
     class="friend"
     v-for="friend in friends" 
     :key="friend.id"
     :id="friend.id"
     :name="friend.name" 
     :phone-number="friend.phone" 
     :email-address="friend.email" 
     :is-favorite="friend.isFavorite"
      @toggle-favorite='toggleFavoriteStatus'
      @delete="deleteContact"
    />
    </ul>
  </section>
</template>


<script>
import './components/styles.css'
import FriendContact from './components/FriendContact.vue'
import NewFriend from './components/NewFriend.vue'

export default {
  components: { FriendContact, NewFriend },
  data() {
    return {
      friends: [
        {
          id: 'manuel',
          name: 'Manuel Lorenz',
          phone: '0123 456 7899',
          email: 'mauel@localhost.com',
          isFavorite: true
        },
        {
          id: 'julie',
          name: 'Julie Jones',
          phone: '655 165 6565',
          email: 'julie@localhost.com',
          isFavorite: false
        }
      ],
    }
  },


  methods: {
    toggleFavoriteStatus(friendId){
      const identifiedFriend = this.friends.find(
      (friend) => friend.id === friendId)

      identifiedFriend.isFavorite = !identifiedFriend.isFavorite
    },

    // How to add a new friend
    addContact(name, phone, email){
      const newFriendContact = {
        id: new Date().toISOString(),
        name: name,
        phone: phone,
        email: email,
        isFavorite: false,
      }
      this.friends.push(newFriendContact)
    },

    // How to delete a new friend
    deleteContact(friendId){
      this.friends = this.friends.filter(friend => friend.id !== friendId)
    },
  

  }

}
</script>