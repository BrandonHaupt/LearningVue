<template>
  <section>
    <header>
      <h1>My Friend List</h1>
    </header>
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
    />
    </ul>
  </section>
</template>


<script>
import './components/styles.css'
import FriendContact from './components/FriendContact.vue'

export default {
  components: { FriendContact },
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
    }
  }

}
</script>