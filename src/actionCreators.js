import * as requests from './requests'



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
            return data
        })

        // .then(body => console.log("if the return worked", body))
}


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

export const deleteCurriculum = (id) => dispatch => {
    console.log("in action creator")
    requests.deleteCurriculum(id)
        .then(data => {
            console.log(data)
        })
    dispatch({ type: 'DELETE_CURRICULUM', payload: { deletedCurriculum: id } })
}



export const setCurrentLesson = (lesson) => ({ type: 'SET_CURRENT_LESSON', payload: { currentLesson: lesson }})