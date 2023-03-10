




const app = Vue.createApp({

    data(){
        return{
            friends:[
                {
                    id: 'julie',
                    name: "Julie Jones",
                    phone: '09876 543 221',
                    email: 'julie@localhost.com'
                },
                
            ],
        }
    },

})

//Components are essentially vue apps, like mini apps (they can have data, methods, etc)
app.component('friend-contact', {
    template: `
    <li>
        <h2>{{friend.name}}</h2>
        <button @click="toggleDetails()">{{detailsAreVisible ? 'Hide' : 'Show'}}</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{friend.phone}}</li>
            <li><strong>Email:</strong> {{friend.email}}</li>
        </ul>
    </li>
    `,

    data(){
        return{
            detailsAreVisible: false,
            friend:{
                id: 'manual',
                name: "Manual Lorenz",
                phone: '1234 567 8991',
                email: 'manuel@localhost.com'
            },
        }
    },

    methods: {
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible
        },
    },
})

// If you are going to add a component then mount needs to be below everything
app.mount("#app")