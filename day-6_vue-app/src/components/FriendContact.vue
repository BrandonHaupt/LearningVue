<template>
    <li>
        <!-- friendIsFavorite is the new prop isFavorite but because it's treated like a const value you cant change it unless you do a work around -->
        <h2>{{ name }} {{ isFavorite ? '(Favorite)' : '' }}</h2>
        
        <button @click="toggleFavorite">Toggle Favorite</button>
        <!-- a button that shows and hides the information below -->
        <button @click="toggleDetails">{{detailsAreVisible ? 'Hide' : 'Show'}}</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ phoneNumber }}</li>
            <li><strong>Email:</strong> {{ emailAddress }}</li>
        </ul>

        <button @click="$emit('delete', id)">Delete</button>
    </li>
</template>


<script>
    export default {

        // props: [
        //     'name',
        //     'phoneNumber',
        //     'emailAddress',
        //     'isFavorite'
        // ],

        // Same as above but is an object instead
        // props: {
        //     name: String,
        //     phoneNumber: String,
        //     emailAddress: String,
        //     isFavorite: String
        // },

        // Same as above but is more indepth and allows more props
        // you define the props recieved
        props: {
            id: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            phoneNumber: {
                type: String,
                required: true
            },
            emailAddress: {
                type: String,
                required: true
            },
            isFavorite: {
                type: Boolean,
                required: false,
                // can also be a function as well
                // default: function() {}
                default: false,
                // is a custom validator that will show up in the dev logs 
                // validator: function(value){
                //     return value === '1' || value === '0'
                // }
            },
        },

        //counterpart to props
        // you define custom events that might be emitted
        emits: ['toggle-favorite', 'delete'], // basic form

        // emits: {
        //     'toggle-favorite': function(id) {
        //         if(id) {
        //             return true
        //         } else {
        //             // submits a warning if the id is missing on click
        //             console.warn('ID is missing!')
        //             return false
        //         }
        //     },
        // }, // more advanced form

        data(){
            return{
                detailsAreVisible: false,
                // If we want to add another prop, its treated like a const and cant be changed
                // You need to work around to be able to change it
                // You create a new data property and target the new prop data and then you can change it everywhere else
            }
        },

        // Toggles the button above to show or hide content
        methods: {
            toggleDetails(){
                this.detailsAreVisible = !this.detailsAreVisible  
            },

            // The convention for $emit is to use kavbop case
            // something-something <------------------^
            toggleFavorite(){
               this.$emit('toggle-favorite', this.id)
            },

            // deleteFriend() {
            //     this.$emit('delete', this.id)
            // }
        }

    }
</script>