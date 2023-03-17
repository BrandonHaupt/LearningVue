import { createApp } from 'vue';
// ! STEP 1: Import createRouter, createWebHistory from vue-router
import { createRouter, createWebHistory} from 'vue-router'
//! STEP 4: import the page you're wanting to route to
import TeamsList from './components/teams/TeamsList.vue'
import UsersList from './components/users/UsersList.vue'
import TeamMembers from './components/teams/TeamMembers.vue'

import App from './App.vue';

// ! STEP 2: create your route
const router = createRouter({
    history: createWebHistory(),
    //! STEP 3: create a routes array
    routes: [
        //! STEP 5: each object is 1 route, you need to import the vue file and have your component method target that page
        {path: '/teams', component: TeamsList},
        {path: '/users', component: UsersList},
        // Dynamic route that takes us to the ID of that route
        // everything that starts with a : is a paramater
        {path: '/teams/:teamId', component: TeamMembers},

    ],
    // You can change this to change the css active classes and such
    // linkActiveClass: 'active'
})

const app = createApp(App)

app.use(router)

app.mount('#app');
