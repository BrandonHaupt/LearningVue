<template>
    <li>
        <!-- friendIsFavorite is the new prop isFavorite but because it's treated like a const value you cant change it unless you do a work around -->
        <h2>{{ name }} {{ friendIsFavorite ? '(Favorite)' : '' }}</h2>
        
        <button @click="toggleFavorite">Toggle Favorite</button>
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
        props: {
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

        data(){
            return{
                detailsAreVisible: false,
                // If we want to add another prop, its treated like a const and cant be changed
                // You need to work around to be able to change it
                // You create a new data property and target the new prop data and then you can change it everywhere else
                friendIsFavorite: this.isFavorite,
            }
        },

        // Toggles the button above to show or hide content
        methods: {
            toggleDetails(){
                this.detailsAreVisible = !this.detailsAreVisible  
            },

            toggleFavorite(){
               this.friendIsFavorite = !this.friendIsFavorite
            }
        },

    }
</script>