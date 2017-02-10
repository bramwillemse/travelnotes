import Vue from 'vue';
import { api } from './services/api';


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
        // showData() {
        //     console.log('test:' + data.notes);
        // }
    },

    created() {
        return Api.getNotes()
            .then(response => console.log(response.json))
    }
})

new Vue({
    el: '#app'
})