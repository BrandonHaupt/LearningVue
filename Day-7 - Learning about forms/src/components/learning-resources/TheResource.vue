
<template>
    <base-card>
        <base-button @click="setSelectedTab('stored-resources')" :mode="storedResButtonMode">Stored Resources</base-button>
        <base-button @click="setSelectedTab('add-resources')" :mode="addResButtonMode">Add Resources</base-button>
    </base-card>

    <!-- if you switch tabs, this will keep the data in the component -->
    <keep-alive>
        <component :is="selectedTab"/>
    </keep-alive>
</template>

<script>

    import StoredResources from './StoredResources.vue'
    import AddResources from './AddResources.vue'

    export default{

        components: {
            StoredResources,
            AddResources,
        },

        data(){
            return{
                selectedTab: 'stored-resources',
                storedResources: [
                    {
                        id: 'offical-guide', 
                        title: 'Offical Guide', 
                        description: 'The official Vue.js documentation.', 
                        link: "https://vuejs.org"
                    },
                    {
                        id: 'google', 
                        title: 'Google', 
                        description: 'Learn to Google...', 
                        link: "https://google.com"
                    },
                ],
            }
        },

        provide() {
            return {
                resources: this.storedResources,
                addResource: this.addResource,
            }
        },

        methods: {
            setSelectedTab(tab){
                this.selectedTab = tab
            },

            addResource(title, description, url){
                const newResource = {
                    id: new Date().toISOString(),
                    title: title,
                    description: description,
                    link: url
                }
                this.storedResources.unshift(newResource)
                this.selectedTab = 'stored-resources'
            },
        },

        // Allows for if we have one button selected the other button will be a different style
        computed: {
            storedResButtonMode(){
                return this.selectedTab === 'stored-resources' ? null : 'flat'
            },
            addResButtonMode(){
                return this.selectedTab === 'add-resources' ? null : 'flat'
            }
        }
    }

</script>


<styles>
</styles>