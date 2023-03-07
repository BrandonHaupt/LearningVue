const app = Vue.createApp({
    data(){
        return {
            goalA:'Learn Vue',
            // Normal way vvvv
            goalB: 'Master Vue',

            // How to render it as html (*1)
            // goalB: '<h1>Master Vue</h1>',
            
            link: "https://vuejs.org/"
        }
    },

    methods:{
        outputGoal() {
            const ranNum = Math.random()
            if(ranNum < 0.5){
                // we can call from the data only using this because its global apparently
                return this.goalA
            } else {
                return this.goalB
            }
        }
    }
})

app.mount('#user-goal')