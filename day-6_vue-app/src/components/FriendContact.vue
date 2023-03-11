<template>
    <li>
        <h2>{{ name }}</h2>
        <!-- a button that shows and hides the information below -->
        <button @click="toggleDetails">{{detailsAreVisible ? 'Hide' : 'Show'}}</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ phoneNumber }}</li>
            <li><strong>Email:</strong> {{ emailAddress }}</li>
        </ul>
    </li>
</template>


<script>
    export default {

        props: [
            'name',
            'phoneNumber',
            'emailAddress'
        ],

        data(){
            return{
                detailsAreVisible: false,
                friend: {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '0123 456 7899',
                    email: 'mauel@localhost.com'
                    },
            }
        },

        // Toggles the button above to show or hide content
        methods: {
            toggleDetails(){
                this.detailsAreVisible = !this.detailsAreVisible  
            }
        },

    }
</script>