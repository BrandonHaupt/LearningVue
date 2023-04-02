<!-- This displays the data -->

<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
      </div>
      <!-- If the data is loading this will show -->
      <p v-if="isLoading">Loading...</p>
  
      <!-- If there is an error it will show this message -->
      <p v-else-if="!isLoading && error">{{error}}</p>

      <!-- Checks to see if there is any data, if not then it outputs a message -->
      <p v-else-if="!isLoading && (!results || results.length === 0)">No data found. Start adding some first.</p>

      <!-- if the data is loaded this will show instead -->
      <ul v-else-if="!isLoading && results && results.length > 0">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

const url = 'https://vue-http-demo-136bd-default-rtdb.firebaseio.com/'


export default {

  components: {
    SurveyResult,
  },

  data(){
    return{
      results: [],
      isLoading: false,
      error: null,
    }
  },

// This fetches the data for us
  methods: {
    loadExperiences(){
      // We set isLoading to true to show that we are getting the data from the back end
      this.isLoading = true
      this.error = null
      fetch(`${url}/surveys.json`)
      .then((response) =>{
        if(response.ok){
          return response.json()
        }
      })
      .then((data) => {
        // We set the isLoading back to false once we got the data so we can use it again if need be
        this.isLoading = false
        const results = []
        for (const id in data){
          results.push({
            id: id, 
            name: data[id].name, 
            rating: data[id].rating
          })
        }
        this.results = results
      })
      .catch((error) => {
        console.log(error)
        // We set isLoading to false because we arent loading anymore but we got an error
        this.isLoading = false
        this.error = 'Failed to fetch data - please try again later'
      })
    }
  },

// This should automatically load the data
  mounted(){
    this.loadExperiences()
  },

};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>