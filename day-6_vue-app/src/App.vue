<template>
  <section>
    <header>
      <h1>My Friend List</h1>
    </header>
    <ul>
     <friend-contact 
     class="friend"
     v-for="friend in friends" 
     :key="friend.id" 
     :name="friend.name" 
     :phone-number="friend.phone" 
     :email-address="friend.email" 
     :is-favorite="true"/>
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
          email: 'mauel@localhost.com'
        },
        {
          id: 'julie',
          name: 'Julie Jones',
          phone: '655 165 6565',
          email: 'julie@localhost.com'
        }
      ],
    }
  },



}
</script>