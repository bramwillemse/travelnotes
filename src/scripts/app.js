import Vue from 'vue'

import modal from './components/modal'
import notes from './components/notes'
import search from './components/search'

new Vue({
    el: '#app',
    components: { 
        modal: modal,
        notes: notes,
        search: search
    }
})