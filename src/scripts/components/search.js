// Vendor
import axios from 'axios'
import Fuse from 'fuse.js'
import search from '../services/search'

export default {
    name: 'search',

    data() { 
        return {
            query: '', // search input value
            search: {
                title: 'Search locations',
                input: {
                    label: 'Search',
                    placeholder: 'i.e. Buenos Aires, Argentina'
                },   
                button: {
                    label: 'Search'
                }
            },
            notes: [],
            locations: []
        }
    },

    template: `
        <section class="search">            
            <form class="form form--search-location">
                <label for="search">Search</label>
                <input name="search" v-model="query" class="input" type="text" :placeholder="search.input.placeholder">
                <button class="button button--submit">{{ search.button.label }}</button>
            </form>    

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
                    let results = response.data

                    search.initNotes(results) // init Fuse instance
                    this.results = results // update state
                }
                
            )
    },

    mounted() {
    },

    watch: {
        query() { // search when query changes
            let query = this.query.trim()

            if (query === '') // show all if no query is given
                this.results = this.notes
            else // show fuse results
                this.results = this.fuse.search(query)

        }
    }
}