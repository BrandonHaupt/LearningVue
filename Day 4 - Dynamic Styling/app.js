
const app = Vue.createApp({
    data(){
        return{
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false,
        }
    },

    computed: {
        // better for dynamic or complex styling/code
        boxAClasses(){
          return {active: this.boxASelected}
        }
    },

    methods:{
        boxSelected(box){
            if(box === 'A'){
                console.log('Box A Selected')
                // Makes the box toggleable
                this.boxASelected = !this.boxASelected
            } else if (box === 'B') {
                console.log('Box B Selected')
                // Makes the box toggleable
                this.boxBSelected = !this.boxBSelected
            } else {
                console.log('Box C Selected')
                // Makes the box toggleable
                this.boxCSelected = !this.boxCSelected
            }
        }
    }

}).mount("#styling")