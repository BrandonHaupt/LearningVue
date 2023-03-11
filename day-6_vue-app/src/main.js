import { createApp } from 'vue'
import App from './App.vue'
import FriendContact from './components/FriendContact.vue'

//! Step 2: Import the new component
import NewFriend from './components/NewFriend.vue'

const app = createApp(App)

app.component('friend-contact', FriendContact)
// ! Step 3: to add a new component you must create the file first, import the file, then add that into app.vue under
// the new name vvvvvvvv---- that name
app.component('new-friend', NewFriend)


app.mount('#app')
