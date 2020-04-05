
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

// Get /userscurriculums/:id
export const fetchUsersCurriculums = (id) => fetch(`${baseURL}/userscurriculums/${id}`)
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
}).then(parseData)

// PATCH Curriculums/:id
export const patchCurriculum = (data, id) => fetch(`${baseURL}/curriculums/${id}`, {
    method: 'PATCH',
    headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
    },
    body: JSON.stringify(data)
})


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




//Parsing out the youtube ID (I could even build this to find out what site that specific article is on...)
export const getYoutubeIDFromURL = (url) => {
    let video_id = url.split('v=')[1]

    if (!video_id) {
        console.log("There is a problem with this URL")
    } else {
        let ampersandPosition = video_id.indexOf('&');
        if (ampersandPosition != -1) {
            video_id = video_id.substring(0, ampersandPosition);
        }
        console.log(`The video ID is ${video_id}`)
        return video_id
    }
}