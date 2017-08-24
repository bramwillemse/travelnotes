import Fuse from 'fuse.js'

/** 
 * INIT SEARCH
 * Initiate a Fuse instance with data
 */
function init(data) {
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

    return new Fuse(data, options)
}

function query(query) {
    console.log('notes queried, with:' + query)
}

export default {
    init,
    query
}