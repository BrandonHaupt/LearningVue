
const app = Vue.createApp({
    
    data(){
        return{
            counter: 0,
            username: '',
            confirmedName: ''
        }
    },
    methods:{
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