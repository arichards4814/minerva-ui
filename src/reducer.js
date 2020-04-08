

const initialState = {
    curriculums: [],
    thisUsersCurriculums: [],
    currentCurriculum: {},
    currentLesson: {},

    notebooks: [],
    currentNotebook: {},
    currentNote: {},

    navlingHidden: false,

    currentNotepadContent: {},
    currentNotepadDetails: {},

    selectedNoteIndex: 0,

    subscriptions: {}
    
}

export const reducer = (prevState = initialState, action) => {
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
        case 'FETCH_USERS_NOTEBOOKS':
            return { ...prevState, notebooks: action.payload.notebooks }
        case 'POST_NOTEBOOKS':
            let updatedNotebooks = [ ...prevState.notebooks ]
            updatedNotebooks.push(action.payload.notebook)
            return { ...prevState, notebooks: updatedNotebooks, currentNotebook: action.payload.notebook }
        case 'SET_CURRENT_NOTEBOOK':
            return { ...prevState, currentNotebook: action.payload.currentNotebook }
        case 'FETCH_NOTEBOOK':
            return { ...prevState, currentNotebook: action.payload.currentNotebook }
        case 'HIDE_NAVLING':
            return { ...prevState, navlingHidden: true }
        case 'SHOW_NAVLING':
            return { ...prevState, navlingHidden: false }
        case 'SET_CURRENT_NOTEPAD_CONTENT':
            return { ...prevState, currentNotepadContent: action.payload.currentNotepadContent }
        case 'SET_CURRENT_NOTEPAD_DETAILS':
            return { ...prevState, currentNotepadDetails: action.payload.currentNotepadDetails }
        case 'SET_SELECTED_NOTE_INDEX':
            return { ...prevState, selectedNoteIndex: action.payload.selectedNoteIndex }
        case 'POST_NOTES':
            let updatedCurrentNotebook = { ...prevState.currentNotebook }
            updatedCurrentNotebook.notes.push(action.payload.note)
            return { ...prevState, currentNotebook: updatedCurrentNotebook }
        case 'DELETE_NOTE':
            let currentNotebookCopy = {...prevState.currentNotebook}
            let foundIndexNote = currentNotebookCopy.notes.findIndex(note => note.id === action.payload.deletedNote)
            currentNotebookCopy.notes.splice(foundIndexNote, 1)
            return { ...prevState, currentNotebook: currentNotebookCopy}
        case 'FETCH_USERS_SUBSCRIPTIONS':
            return { ...prevState, subscriptions: action.payload.subscriptions }
        case 'POST_SUBSCRIPTION':
            return { ...prevState}
        default:
            return prevState
    }
}