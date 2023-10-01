const { createApp } = Vue;

createApp({
    data() {
        return {
            tasks: [
                { text: 'Fare la spesa', isError: false },
                { text: 'Studiare Vue',  isError: false },
                { text: 'Comprare la pappa di Artu', isError: false }
            ],
            newTask: '',
            isError: false
        };
    },

    methods: {
        addTask() {
            if (this.newTask.length < 5) {
                // Bonus 1: Messaggio di errore se il task ha meno di 5 caratteri
                this.isError = true;
            } else {
                // Aggiungi un nuovo task alla lista
                this.tasks.unshift({ text: this.newTask });
                // Resetta il campo di input
                this.newTask = '';
                // Resetta l'errore se era stato visualizzato
                this.isError = false;
            }
        },

        
        
    }
}).mount('#app');
