
<template>
  <section>
    <header>
      <h1>My Friend List</h1>
    </header>
    <ul>
     <friend-contact name="Manuel Lorenz" phone-number="0123 456 7899" email-address="mauel@localhost.com"/>
     <friend-contact name="Julie Jones" phone-number="655 165 6565" email-address="julie@localhost.com"/>
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