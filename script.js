const { createApp } = Vue;

createApp({
    data() {
        return {
            tasks: [
                { text: 'Fare la spesa', done: false, isError: false },
                { text: 'Studiare Vue', done: false, isError: false },
                { text: 'Comprare la pappa di Artu', done: false, isError: false }
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
        removeTask(index) {
            if (this.tasks[index].done) {
                // Milestone 2: Rimuovi il task solo se è stato completato
                this.tasks.splice(index, 1);
            } else {
                // Milestone 3 Bonus: Messaggio di errore se il task non è stato completato
                this.tasks[index].isError = true;
            }
        },

        toggleDone(index) {
            // Milestone 2: Inverti lo stato 'done' del task
            this.tasks[index].done = !this.tasks[index].done;
            // Milestone 2: Resetta l'errore se era stato visualizzato
            this.tasks[index].isError = false;
        }
        
        
    }
}).mount('#app');
