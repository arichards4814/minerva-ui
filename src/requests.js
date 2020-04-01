
const baseURL = 'http://localhost:3000'
// parse incoming data
const parseData = response => response.json()
// error handler
const catchError = error => console.log(`%c${error}`, 'color: red;')

//////////////////////////////////////////////////////

// GET /curriculums
export const fetchCurriculums = () => fetch(`${baseURL}/curriculums`)
    .then(parseData)
    .catch(catchError)

// Get /curriculums/:id
export const fetchCurriculum = (id) => fetch(`${baseURL}/curriculums/${id}`)
    .then(parseData)
    .catch(catchError)

// POST Curriculums
export const postCurriculums = (data) => fetch(`${baseURL}/curriculums`, {
    method: 'POST',
    headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
    },
    body: JSON.stringify(data)
})

// PATCH Curriculums/:id
export const patchCurriculum = (data, id) => fetch(`${baseURL}/curriculums/${id}`, {
    method: 'PATCH',
    headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
    },
    body: JSON.stringify(data)
}).then(parseData)

// GET /notebooks
export const fetchNotebooks = () => fetch(`${baseURL}/notebooks`)
    .then(parseData)
    .catch(catchError)

//Get /notebooks/:id
export const fetchNotebook = (id) => fetch(`${baseURL}/notebooks/${id}`)
    .then(parseData)
    .catch(catchError)

// POST Notebooks
export const postNotebooks = (data) => fetch(`${baseURL}/notebooks`, {
    method: 'POST',
    headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
    },
    body: JSON.stringify(data)
})


// PATCH Notebooks/:id
export const patchNotebooks = (data, id) => fetch(`${baseURL}/notebooks/${id}`, {
    method: 'PATCH',
    headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
    },
    body: JSON.stringify(data)
}).then(parseData)