const initialState = {
    curriculums: [],
    currentCurriculum: {},
    notebooks: [],
    likes: 0,
}

export const reducer = (prevState = initialState, action) => {
    // console.log('1: ', prevState, ' 2: ', action)
    switch (action.type) {
        case 'LIKE':
            console.log(prevState.likes)
            return { ...prevState, likes: prevState.likes + 1 }
        case 'FETCH_CURRICULUMS':
            return {...prevState, curriculums: action.payload.curriculums}
        case 'FETCH_CURRICULUM':
            return { ...prevState, currentCurriculum: action.payload.currentCurriculum }
        default:
        
            return prevState
    }
}