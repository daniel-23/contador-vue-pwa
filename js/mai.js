const app = Vue.createApp({
    data(){
        return {
            title: "Hola mundo desde vue!",
            count: 0,
        };
    },
    methods: {
        addCount(){
            if(this.count < 10){
                this.count++;
            }
        },
        disCount(){
            if(this.count > 0){
                this.count--;
            }
        }
    }
});

const mountApp = app.mount("#app");