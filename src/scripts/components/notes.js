// Vendor
import axios from 'axios'

export default {
    name: 'notes',

    template: `
        <div class="notes">
            <div v-for="note in notes" class="note">
                <p>{{note.text}}</p>
                <p>Location: {{note.location.lat}}, {{note.location.lon}}
            </div>
        </div>
    `,

    data() { 
        return {
            notes: [] // is filled by api call below
        }
    },

    methods : {
    },

    created() {
        return axios.get('http://localhost:3003/notes')
            .then(response => this.notes = response.data)
    }
}