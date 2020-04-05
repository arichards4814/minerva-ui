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


export const setCurrentLesson = (lesson) => ({ type: 'SET_CURRENT_LESSON', payload: { currentLesson: lesson }})