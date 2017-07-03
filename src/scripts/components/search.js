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
                    var options = {
                        shouldSort: true,
                        threshold: 0.3,
                        location: 0,
                        distance: 200,
                        maxPatternLength: 32,
                        minMatchCharLength: 1,                        
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