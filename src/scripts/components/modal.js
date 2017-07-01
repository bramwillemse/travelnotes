// Vendor
import axios from 'axios'

export default {
    name: 'modal',

    template: `
        <div class="modal">
            <button class="button button--rounded button--close modal__close">X</button>
            {{title}}
        </div>
    `,

    data() { 
        return {
            modal: [] // is filled by api call below
        }
    },

    methods : {
    },

    created() {
        return axios.get('http://localhost:3003/dom')
            .then(response => this.dom.modal = response.data)
    }
}