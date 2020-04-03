const initialState = {
    curriculums: [],
    currentCurriculum: {},
    currentLesson: {},
    notebooks: []
}

export const reducer = (prevState = initialState, action) => {
    // console.log('1: ', prevState, ' 2: ', action)
    switch (action.type) {
        case 'SET_CURRENT_LESSON':
            return { ...prevState, currentLesson: action.payload.currentLesson }
        case 'FETCH_CURRICULUMS':
            return {...prevState, curriculums: action.payload.curriculums}
        case 'FETCH_CURRICULUM':
            return { ...prevState, currentCurriculum: action.payload.currentCurriculum }
        default:
        
            return prevState
    }
}