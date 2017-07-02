// Vendor
import axios from 'axios'
import Fuse from 'fuse.js'

export default {
    name: 'search',

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

    template: `
        <section class="search">
            <h1>{{search.title}}</h1>
            
            <form class="form form--search-location">
                <input v-model="query" class="input" type="text" :placeholder="search.input.placeholder">
                <button class="button button--submit">{{ search.button.label }}</button>
            </form>    

            <p>Search query is: {{ query }}</p>

            <ul class="search-results">
                <li v-for="result in results" class="search-result">
                    <p>
                        <h2 class="search-result__title">{{ result.title }}</h2>
                        <span class="search-result__location">{{ result.location.city }}, {{ result.location.country }}</span>
                        <span class="search-results__text">{{ result.text }}</span>
                    </p>
                </li>
            </ul>
        </section>
    `,

    created() {
        return axios.get('http://localhost:3003/notes') // get all notes
            .then(
                response => {
                    var options = {
                        keys: [
                            "title",
                            "location.city",
                            "location.country",
                            "text"
                        ]
                    }

                    this.fuse = new Fuse(response.data, options),
                    this.results = response.data
                }
                
            )
    },

    mounted() {
    },

    watch: {
        query() {
            if (this.query.trim() === '')
                this.results = this.notes
            else
                this.results = this.fuse.search(this.query.trim())
        }
    }
}