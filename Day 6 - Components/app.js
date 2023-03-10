




const app = Vue.createApp({

    data(){
        return{
            detailsAreVisible: false,
            friends:[
                {
                    id: 'manual',
                    name: "Manual Lorenz",
                    phone: '1234 567 8991',
                    email: 'manuel@localhost.com'
                },
                {
                    id: 'julie',
                    name: "Julie Jones",
                    phone: '09876 543 221',
                    email: 'julie@localhost.com'
                },
            ],
        }
    },

    methods: {
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible
        },
    },


}).mount("#app")