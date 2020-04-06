

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
        case 'POST_CURRICULUMS':
            let curriculumsCopy = [...prevState.curriculums]
            curriculumsCopy.push(action.payload.curriculum)
            console.log("curriculums copy on post", curriculumsCopy) 
            return {...prevState, curriculums: curriculumsCopy, currentCurriculum: action.payload.curriculum}
        case 'PATCH_LESSON':
            let updatedCurriculum1 = { ...prevState.currentCurriculum } 
            let foundIndex = updatedCurriculum1.lessons.findIndex(lesson => lesson.id === action.payload.lesson.id)
            updatedCurriculum1.lessons[foundIndex] = action.payload.lesson
            return { ...prevState, currentCurriculum: updatedCurriculum1 }
        case 'UPDATE_CURRENT_CURRICULUM':
            return { ...prevState, currentCurriculum: action.payload.currentCurriculum }
        case 'POST_LESSONS':
            let updatedCurriculum = {...prevState.currentCurriculum } 
            updatedCurriculum.lessons.push(action.payload.lesson)
            return { ...prevState, currentCurriculum: updatedCurriculum }
        case 'DELETE_LESSON':
            let updatedCurriculum2 = { ...prevState.currentCurriculum }
            let foundIndex2 = updatedCurriculum2.lessons.findIndex(lesson => lesson.id === action.payload.deletedLesson)
            updatedCurriculum2.lessons.splice(foundIndex2, 1)
            return { ...prevState, currentCurriculum: updatedCurriculum2 }
        case 'DELETE_CURRICULUM':

            let updatedCurriculums = [ ...prevState.curriculums ]
            let foundIndexCurriculum = updatedCurriculums.findIndex(curriculum => curriculum.id === action.payload.deletedCurriculum)
            updatedCurriculums.splice(foundIndexCurriculum, 1)
            return { ...prevState, curriculums: updatedCurriculums, currentCurriculum: {} }

        default:
        
            return prevState
    }
}