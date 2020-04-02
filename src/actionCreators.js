import * as requests from './requests'

export const likeActionCreator = () => ({ type: 'LIKE' })

export const fetchCurriculums = () => dispatch => {
    requests.fetchCurriculums()
    .then(data => {
        dispatch({type: 'FETCH_CURRICULUMS', payload: {curriculums: data}})
    })

}