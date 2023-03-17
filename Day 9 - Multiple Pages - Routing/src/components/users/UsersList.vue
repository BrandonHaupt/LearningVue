<template>
  <button @click="confirmInput">Confirm</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],

  methods: {
    confirmInput(){
      // does something

      //then navigate away programmatically
      // this will allow us to change the route to /teams once the button is pushed.
      // like once we confirm a purchase it takes us to a recipe page or back to the home page.
      this.$router.push('/teams')
    }
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>