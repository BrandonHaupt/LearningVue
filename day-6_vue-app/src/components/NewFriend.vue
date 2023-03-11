
<!--! Step 1: Create the file -->
<template>
    <form @submit.prevent="submitData">
        <div>
            <label>Name :</label>
            <input type="text" v-model="enteredName" placeholder="Friend Name"/>
        </div>

        <div>
            <label>Phone # :</label>
            <input type="text" v-model="enteredPhone" placeholder="Phone Number"/>
        </div>

        <div>
            <label>Email :</label>
            <input type="text" v-model="enteredEmail" placeholder="Email"/>
        </div>

        <!-- <div>
            <label>Favorite friend?:</label>
            <input type="checkbox" v-model="checkedFavorite" placeholder="Favorite Friend?" />
        </div> -->
        
        <button @click="addNewFriend">Add Contact</button>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                enteredName: '',
                enteredPhone: '',
                enteredEmail: '',
                // checkedFavorite: false,
            }
        },

        emits:['add-contact'],

        methods: {
            submitData() {
                this.$emit(
                    'add-contact', 
                    this.enteredName, 
                    this.enteredPhone, 
                    this.enteredEmail
                )
            }
        },
    }
</script>