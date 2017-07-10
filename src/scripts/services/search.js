import Fuse from 'fuse.js'

/** 
 * INIT SEARCH
 * Initiate a Fuse instance with data
 */
function initNotes(data) {
    const options = {
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

    this.fuse = new Fuse(data, options)
}

function queryNotes(input) {
    console.log('queryNotes')
}

export default {
    initNotes,
    queryNotes
}