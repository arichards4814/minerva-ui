
const initialState = {
    curriculums: [],
    thisUsersCurriculums: [],
    currentCurriculum: {},
    currentLesson: {},
    thisUsersNotebooks: []
}

export const reducer = (prevState = initialState, action) => {
    // console.log('1: ', prevState, ' 2: ', action)
    switch (action.type) {
        case 'SET_CURRENT_LESSON':
            return { ...prevState, currentLesson: action.payload.currentLesson }
        case 'FETCH_CURRICULUMS':
            return {...prevState, curriculums: action.payload.curriculums}
        case 'FETCH_USERS_CURRICULUMS':
            return { ...prevState, thisUsersCurriculums: action.payload.thisUsersCurriculums }
        case 'FETCH_CURRICULUM':
            return { ...prevState, currentCurriculum: action.payload.currentCurriculum }
        case 'PATCH_LESSONS':
            return { ...prevState, currentCurriculum: action.payload.currentCurriculum }
        case 'UPDATE_CURRENT_CURRICULUM':
            return { ...prevState, currentCurriculum: action.payload.currentCurriculum }
        case 'POST_LESSONS':

            console.log("in reducer prevState curr", prevState.currentCurriculum) 
            console.log("in reducer prev curr lessons", prevState.currentCurriculum.lessons)   
            console.log("in reducer lesson", action.payload.lesson)  
            let updatedCurriculum = {...prevState.currentCurriculum } 
            updatedCurriculum.lessons.push(action.payload.lesson)
            console.log("in reducer", updatedCurriculum)       
            return { ...prevState, currentCurriculum: updatedCurriculum }
        default:
        
            return prevState
    }
}