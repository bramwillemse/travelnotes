// Vendor
import axios from 'axios'
import Fuse from 'fuse.js'

export default {
    name: 'search',
    template: `
        <section class="search">
            <h1>{{search.title}}</h1>
            
            <form class="form form--search-location">
                <input v-model="query" class="input" type="text" :placeholder="search.input.placeholder">
                <button class="button button--submit">{{ search.button.label }}</button>
            </form>    

            <p>Search query is: {{ query }}</p>

            <ul class="search-results">
                <li v-for="result in notes" class="search-results__item">
                    {{ result.title }}
                </li>
            </ul>

            <ul class="search-results">
                <li v-for="result in locations" class="search-results__item">
                    {{ result.title }}
                </li>
            </ul>
        </section>
    `,

    mounted() {
        var options = {
            keys: [
                "title",
                "city",
                "country",
                "text"
            ]
        };

        this.fuse = new Fuse(this.notes, options)
        this.result = this.notes
    },

    watch: {
        query() {
            if (this.query.trim() === '')
                this.result = this.notes
            else
                this.result = this.fuse.search(this.notes)
        }
    },

    data() { 
        return {
            query: '',
            search: {
                title: 'Search locations',
                input: {
                    placeholder: 'i.e. Buenos Aires, Argentina'
                },   
                button: {
                    label: 'Search'
                }
            },
            notes: [],
            locations: [
                {
                    id: 1,
                    title: 'Buenos Aires, Argentina'
                },
                {
                    id: 2,
                    title: 'Buenos Aires, Blabla'
                },
                {
                    id: 3,
                    title: 'Buenos Aires, Jemoeder'
                },
                {
                    id: 4,
                    title: 'Buenos Aires, Jeweetzelluf'
                }
            ]
        }
    },

    created() {
        return axios.get('http://localhost:3003/notes') // get all notes
            .then(response => this.notes = response.data)
    }    
}