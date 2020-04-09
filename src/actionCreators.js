import * as requests from './requests'
import history from './history.js'


/////
// CURRICULUMS
/////
export const fetchCurriculums = () => dispatch => {
    requests.fetchCurriculums()
    .then(data => {
        dispatch({type: 'FETCH_CURRICULUMS', payload: {curriculums: data}})
    })

}

export const fetchCurriculum = (id) => dispatch => {
    requests.fetchCurriculum(id)
        .then(data => {
            console.log(data)
            dispatch({ type: 'FETCH_CURRICULUM', payload: { currentCurriculum: data } })
        })
}

export const fetchUsersCurriculums = (user_id) => dispatch => {
    //
    requests.fetchUsersCurriculums(user_id)
        .then(data => {
            console.log(data)
            dispatch({ type: 'FETCH_USERS_CURRICULUMS', payload: { thisUsersCurriculums: data } })
        })
}

export const updateCurrentCurriculum = (data, curriculum_id) => dispatch => {
    // in this case I am changing the title and description of the curriculum
    requests.patchCurriculum(data, curriculum_id)
        .then(data => {
            console.log(data)
        })
    dispatch({ type: 'UPDATE_CURRENT_CURRICULUM', payload: { currentCurriculum: data } })
}


export const postCurriculums = (data) => dispatch => {
    requests.postCurriculums(data)
        .then(data => {
            dispatch({ type: 'POST_CURRICULUMS', payload: { curriculum: data } })
            history.push(`/editcurriculums/${data.id}`)
            return data
        })
        // .then(body => console.log("if the return worked", body))
}


export const deleteCurriculum = (id) => dispatch => {
    console.log("in action creator")
    requests.deleteCurriculum(id)
        .then(data => {
            console.log(data)
        })
    dispatch({ type: 'DELETE_CURRICULUM', payload: { deletedCurriculum: id } })
}


/////
// LESSONS
/////

export const postLessons = (data) => dispatch => {
    requests.postLessons(data)
        
    dispatch({ type: 'POST_LESSONS', payload: { lesson: data } })
}


export const patchLesson = (data, id) => dispatch => {
    requests.patchLesson(data, id)
        .then(data => {
            console.log(data)
        })
    dispatch({ type: 'PATCH_LESSON', payload: { lesson: data } })
}


export const deleteLesson = (id) => dispatch => {
    requests.deleteLesson(id)
        .then(data => {
            console.log(data)
        })
    dispatch({ type: 'DELETE_LESSON', payload: { deletedLesson: id } })
}


export const setCurrentLesson = (lesson) => ({ type: 'SET_CURRENT_LESSON', payload: { currentLesson: lesson }})


/////
// NOTEBOOKS
/////

export const postNotebooks = (data) => dispatch => {
    //
    requests.postNotebooks(data)
        .then(data => {
            console.log(data)
            dispatch({ type: 'POST_NOTEBOOKS', payload: { notebook: data } })
            history.push(`/notebooks/${data.id}`)
        })
}

export const setCurrentNotebook = (notebook) => ({ type: 'SET_CURRENT_NOTEBOOK', payload: { currentNotebook: notebook } })

export const fetchNotebook = (id) => dispatch => {
    //fetch and set it to the current notebook
    requests.fetchNotebook(id)
        .then(data => {
            console.log(data)
            dispatch({ type: 'FETCH_NOTEBOOK', payload: { currentNotebook: data } })
        })
}


export const fetchUsersNotebooks = (id) => dispatch => {
    //
    requests.fetchUsersNotebooks(id)
        .then(data => {
            console.log(data)
            dispatch({ type: 'FETCH_USERS_NOTEBOOKS', payload: { notebooks: data } })
        })
}

export const patchNotebooks = (data, id) => dispatch => {
    requests.patchNotebooks(data, id)
        .then(data => {
            console.log(data)
        })
    dispatch({ type: 'PATCH_NOTEBOOKS', payload: { notebook: data } })
}


///
// NAVLING
///
export const hideNavling = () => ({ type: 'HIDE_NAVLING'})
export const showNavling = () => ({ type: 'SHOW_NAVLING' })

///
// NOTEPAD
///

export const setCurrentNotepadContent = (content) => ({ type: 'SET_CURRENT_NOTEPAD_CONTENT', payload: { currentNotepadContent: content } })
export const setCurrentNotepadDetails = (content) => ({ type: 'SET_CURRENT_NOTEPAD_DETAILS', payload: { currentNotepadDetails: content } })
export const setSelectedNoteIndex = (index) => ({ type: 'SET_SELECTED_NOTE_INDEX', payload: { selectedNoteIndex: index } })

///
// NOTES
///

export const postNotes = (data) => dispatch => {
    //
    requests.postNotes(data)
        .then(data => {
            console.log(data)
            dispatch({ type: 'POST_NOTES', payload: { note: data } })
        })
}

//delete note
export const deleteNote = (id) => dispatch => {
    requests.deleteNote(id)
        .then(data => {
            console.log(data)
        })
    dispatch({ type: 'DELETE_NOTE', payload: { deletedNote: id } })
}

///
//  USERS_SUBSCRIPTIONS
///
export const fetchUsersSubscriptions = (id) => dispatch => {
    requests.fetchUsersSubscriptions(id)
        .then(data => {
            dispatch({ type: 'FETCH_USERS_SUBSCRIPTIONS', payload: { subscriptions: data }})
        })
}

export const postSubscription = (data) => dispatch => {
    //
    requests.postSubscription(data)
        .then(data => {
            console.log(data)
            dispatch({ type: 'POST_SUBSCRIPTION', payload: { note: data } })
        })
}


///
// LESSONS_NOTEBOOKS
///

export const postNotebooksWLessonJoiner = (lesson_id, notebook_data) => dispatch => {
    //
    requests.postNotebooksWLessonJoiner(lesson_id, notebook_data)
        .then(data => {
            console.log("data inside action creator", data)
            dispatch({ type: 'POST_NOTEBOOKS_W_LESSON_JOINER', payload: { data: data } })
        })
}