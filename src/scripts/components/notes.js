// Vendor
import axios from 'axios'

export default {
    name: 'notes',

    template: `
        <section class="notes">
            <article v-for="note in notes" class="note">
                <header>
                    <h1 class="h3 note__title">{{note.title}}</h1>
                </header>
                <div class="note__meta note__location">{{note.location.city}}, {{note.location.country}}</div>

                <p class="note__text">{{note.text}}</p>
            </article>
        </section>
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