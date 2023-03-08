
const app = Vue.createApp({
  data(){
    return{
      enteredGoalValue: '',
      goals: [],
      values: {name:"Right", age: 31}
    }
  },

  methods: {
    addGoals(){
      this.goals.push(this.enteredGoalValue)
    },
    removeGoal(index){
      this.goals.splice(index,1)
    }
  }
}).mount("#user-goals")
