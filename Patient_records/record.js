const patientApp = Vue.createApp({
    data() {
        return {
            queue: 0,
            patients: [
                { id: 101, name: 'Alice Johnson', age: 34, condition: 'Flu', doctor: 'Smith' },
                { id: 102, name: 'Bob Williams', age: 45, condition: 'Diabetes', doctor: 'Lee' },
                { id: 103, name: 'Charlie Brown', age: 29, condition: 'Headache', doctor: 'Adams' },
            ],
            currentPatient: { id: 101, name: 'Alice Johnson', age: 34, condition: 'Flu', doctor: 'Smith' }
        };
    },

    methods: {
        addToQueue() {
            this.queue += 1;
        },

        updatePatientRecord(patient) {
            this.currentPatient = patient;
        }
    }
});
