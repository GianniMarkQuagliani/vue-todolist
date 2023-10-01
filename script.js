const {createApp} = Vue;

createApp({
    data() {
        return {
            tasks: [
                // Array di oggetti che rappresentano i todo
                { text: 'Pagare la bolletta' },
                { text: 'Studiare Vue' },
                { text: 'Comprare la pappa di Artur' }
            ],
        }
    },
    methods: {
       
    }
}).mount('#app');