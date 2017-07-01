// Vendor
import axios from 'axios'

export default {
    name: 'search',
    template: `
        <section class="search">
            <h1>{{search.title}}</h1>
            
            <form class="form form--search-location">
                <input v-model="search.query" class="input" type="text" :placeholder="search.input.placeholder">
                <button class="button button--submit">{{ search.button.label }}</button>
            </form>    

            <p>Search query is: {{ search.query }}</p>

            <ul class="search-results">
                <li v-for="result in search.results.notes" class="search-results__item">
                    {{ result.title }}
                </li>
            </ul>

            <ul class="search-results">
                <li v-for="result in search.results.locations" class="search-results__item">
                    {{ result.title }}
                </li>
            </ul>
        </section>
    `,

    data() { 
        return {
            search: {
                title: 'Search locations',
                query: '',
                input: {
                    placeholder: 'i.e. Buenos Aires, Argentina'
                },   
                button: {
                    label: 'Search'
                },
                results: {
                    notes: [
                        {
                            id: 1,
                            title: 'Hostal, Buenos Aires, Argentina'
                        },
                        {
                            id: 2,
                            title: 'Coffee place, Buenos Aires, Argentina'
                        },                        

                    ],
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
            }
        }
    },

    methods: {
    }
}