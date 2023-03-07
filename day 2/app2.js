const app = Vue.createApp({
    data(){
       return{
        name: 'Brandon',
        age: 30,
        agePlusFive: 30+5,
        link: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.publicdomainpictures.net%2Fpictures%2F370000%2Fvelka%2Fanime-manga-yellow-slayer.png&f=1&nofb=1&ipt=0b4d96d84c1792494a35b1087363910baf5aab54f229e90fde779a2ee3bdb55f&ipo=images'
       }
    },

    methods:{
        ranNum(){
            const randomNum = Math.random()

            if(randomNum < .5){
                return "7"
            }else{
                return "randomNum"
            }
        }
    }
}).mount('#app')

