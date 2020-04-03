import * as requests from './requests'

export const likeActionCreator = () => ({ type: 'LIKE' })

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