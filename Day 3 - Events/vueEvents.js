
const app = Vue.createApp({
    
    data(){
        return{
            counter: 0,
            username: '',
            lastName:'',
            // fullname: '',
        }
    },

    // good for timers and http requests
    watch:{
        // if counter > 50 it will reset it
        counter(value){
            if(value > 50){
                const that = this
                setTimeout(function() {
                     that.counter = 0
                }, 2000)
            }
        },
        // you repeat a data property and it will watch that whenever that property changes
        // username(value){
        //     console.log("running")
        //     this.fullname = value + " " + this.lastname
        // },
        // lastname(value){
        //     this.fullname = this.name + " " + value
        // }
    },

    // will only run if it is changed 
    // Cant use a data property
    computed:{
        fullname(){
            console.log('Running')
            if(this.username === '' || this.lastName === ''){
                return ""
            }
            return this.username + ' ' + this.lastName
        }
    },

    // will always run
    methods:{
        outputFullName(){
            
        },
        add(num){
            return this.counter += num
        },
        subtract(num){
            return this.counter -= num
        },
        resetInput(){
            this.username = ''
        },

        // pass in event and default value
        setName(event, lastName){
            this.username = `${event.target.value}`
        },
        submitForm(){
            // One way to prevent default on form
            // e.preventDefault()
            alert('submitted')
        },
        confirmInput(){
            this.confirmedName = this.username;
        }
    }
}).mount('#events')