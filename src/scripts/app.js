var Vue = require('vue');

Vue.component('notes', {
    template: `
        <ul class="notes">
            <li v-for="note in notes">
                test
            </li>
        </ul>
    `,

    data() { 
        return {
            notes: []
        }
    },

    methods : {
        showData() {
            console.log('test:' + data.notes);
        }
    },

    created() {
        return fetch('http://localhost:3004/notes')
            .then(response => this.notes = response.json)

        showData()

    }
})

new Vue({
    el: '#app'
})