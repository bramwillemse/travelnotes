// Vendor
import axios from 'axios'

const instance = axios.create({
    baseURL: 'localhost:3003'
})

export default {
    name: 'notes',
    
    template: `
        <div class="notes">
            <div v-for="note in notes" class="note">
                <p>{{note.text}}</p>
                <p>Location: {{note.location.lat}}, {{note.location.long}}
            </div>
        </div>
    `,

    data() { 
        return {
            notes: [] // is filled by api call below
        }
    },

    methods : {
        getNotes() {
            return axios.get('/notes')
                .then(response => this.notes = response)
        }
    },

    created() {
        getNotes()
    }
}