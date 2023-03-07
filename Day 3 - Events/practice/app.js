
const app = Vue.createApp({
    data(){
        return {
            message: '',
            confirmedInput: ''
        }
    },
    methods:{
        alert(){
            alert("Hello")
        },
        keyDown(event){
            this.message = event.target.value
        },
        keyEnter(e){
            this.confirmedInput = this.message
        }
    }

}).mount('#assignment')