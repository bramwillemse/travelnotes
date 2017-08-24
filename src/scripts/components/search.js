// Vendor
import axios from 'axios'
import Fuse from 'fuse.js'

import config from '../config'
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
                    placeholder: 'Search for locations or notes'
                },   
                button: {
                    label: 'Search'
                }
            },
            results: [],
            notes: [],
            locations: []
        }
    },

    template: `
        <section class="search">            
            <form class="search-form form form--search" v-on:submit.prevent="searchQuery">
                <label class="search-form__label form__label" for="search">Search</label>
                <input class="search-form__input form__input" name="search" v-model="query" type="text" :placeholder="search.input.placeholder">
                <button class="search-form__button button button--submit" type="submit">{{ search.button.label }}</button>
            </form>    

            <ul class="search-results">
                <li v-for="result in results">
                    <a class="search-results__result" href="#">
                        <h2 class="search-results__title">{{ result.title }}</h2>
                        <span class="search-results__location">{{ result.location.city }}, {{ result.location.country }}</span>
                        <span class="search-results__text">{{ result.text }}</span>
                    </a>
                </li>
            </ul>
        </section>
    `,

    methods: {
        init() {
            return axios.get(config.api.baseUrl + 'notes') // get all notes
                .then(
                    response => {
                        let results = response.data

                        this.fuse = search.init(results) // init Fuse instance
                        this.results = results // update state
                    }
                    
                )            
        },
        searchQuery() {
            let query = this.query.trim()

            if (query.length > 0) // show all if no query is given
                this.results = this.fuse.search(query)

        }
    },

    created() {
        this.init()
    },

    watch: {
        query() { this.searchQuery() } // search when query changes
    }
}