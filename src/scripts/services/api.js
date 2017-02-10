const apiBaseURL = 'http://localhost:3003';

/**
 * Wrapper around json-server API.
 *
 * @see https://github.com/typicode/json-server
 * @author Stef Thoen <stef@baardbaard.nl>
 * @example
 * // Create instance of class.
 * let api = new MockAPI();
 *
 * // Use classes' methods to interact with the API.
 * api.getNote(1);
 */
class api {

    /**
     * Get a note.
     *
     * @param {int} id - The note's id.
     * @returns {Object}
     * @example
     * api.getNote(1)
     *     .then(note => {
     *         console.log(note);
     *     })
     *     .catch(error => {
     *         console.error('booooo', error);
     *     });
     */
    getNote(id) {
        return fetch(`${apiBaseURL}/notes/${id}`)
            .then(response => response.json())
    }

    /**
     * Get all the notes.
     *
     * @returns {Array}
     * @example
     * api.getNotes()
     *     .then(notes => {
     *         console.log(notes);
     *     })
     *     .catch(error => {
     *         console.error('booooo', error);
     *     });
     */
    getNotes() {
        return fetch(`${apiBaseURL}/notes`)
            .then(response => response.json())
    }

    /**
     * Create a note.
     *
     * @param {Object} note - A note.
     * @example
     * api.createNote({
     *         "title": "Goku is the best",
     *         "location": {
     *             "lat": "over9000",
     *             "lon": "AlsoOver9000"
     *         },
     *         "author": "Goku",
     *         "author_email": "whatdoesthescoutersay@abouthispower.level"
     *     })
     *     .then(response => {
     *         console.log(response);
     *     })
     *     .catch(error => {
     *         console.error('OVER 9000?!?!', error);
     *     });
     */
    createNote(note) {
        return fetch(
            `${apiBaseURL}/notes`, {
                method: "POST",
                headers: new Headers({ 'Content-Type': 'application/json' }),
                body: JSON.stringify(note)
            })
    }

    /**
     * Delete a note.
     *
     * @param {int} id - The note's id.
     * @example
     * api.deleteNote(4)
     *     .then(response => {
     *         console.log(response);
     *     })
     *     .catch(error => {
     *         console.error('booooo', error);
     *     });
     */
    deleteNote(id) {
        return fetch(
            `${apiBaseURL}/notes/${id}`, { method: "DELETE" })
    }

    /**
     * Update a note.
     *
     * @param {int} id - The note's id.
     * @example
     * api.updateNote({
     *         "id": 1,
     *         "title": "Goku is the best",
     *         "location": {
     *             "lat": "over9000",
     *             "lon": "AlsoOver9000"
     *         },
     *         "author": "Goku",
     *         "author_email": "whatdoesthescoutersay@abouthispower.level"
     *     })
     *     .then(response => {
     *         console.log(response);
     *     })
     *     .catch(error => {
     *         console.error('OVER 9000?!?!', error);
     *     });
     */
    updateNote(note) {
        return fetch(
            `${apiBaseURL}/notes/${note.id}`, {
                method: "PATCH",
                headers: new Headers({ 'Content-Type': 'application/json' }),
                body: JSON.stringify(note)
            })
    }

}

export default api;