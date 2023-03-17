<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  // Allows for data to be passed to this file    
  inject: ['users', 'teams'],

  components: {
    UserItem
  },
  data() {
    return {
      teamName: '',
      members: []
    };
  },

  created(){
    // This is used to see everything thats in the built-in object
    // console.log(this.$route)
    // this.$route.path // teams/teamID
    //! the teamId HAS TO BE THE SAME as what you made it inside of main.js
    const teamId = this.$route.params.teamId
    //this helps us select the right team id
    const selectedTeam = this.teams.find(team => team.id === teamId)

    const members = selectedTeam.members
    const selectedMemebers = []
    // Goes through all the member ids that we got from the given team and select the full user object for every user id then added to selected members and now members has all the member objects
    for(const member of members){
      const selectedUser = this.users.find(user => user.id === member)
      selectedMemebers.push(selectedUser)
    }

    this.members = selectedMemebers
    this.teamName = selectedTeam.name

    console.log(this.members)
  },



};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>