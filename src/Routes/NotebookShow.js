import React, { useState, useEffect } from 'react'
import Row from '../Container/Row'
import Layout from '../Container/Layout'
import F2 from '../Typing/F2'
import { useLocation } from "react-router-dom";
import NotesScroller from '../Container/NotesScroller'
import LongCardScroller from '../Container/LongCardScroller'
import Youtube from '../Components/Youtube'
import QuillEditor from '../Components/QuillEditor'

import QuillEditorV2 from '../Components/QuillEditorV2'
import Timeline from '../Components/Timeline'

import HideIcon from '../Icons/HideIcon'

// redux
import { connect } from 'react-redux';
import { hideNavling, showNavling, fetchNotebook, setCurrentNotepadContent, setCurrentNotepadDetails, postNotes } from '../actionCreators'


const NotebookShow = props => {
    const location = useLocation().pathname.split("/")[2]
    const [totalTime, setTotalTime] = useState(1)

    useEffect(() => {
        props.fetchNotebook(location)
        props.setCurrentNotepadDetails({notebook_id: parseInt(location)})

    }, [])

    const getYoutubeIDFromURL = (url) => {
        let video_id = url.split('v=')[1]

        if (!video_id) {
            console.log("There is a problem with this URL")
        } else {
            let ampersandPosition = video_id.indexOf('&');
            if (ampersandPosition != -1) {
                video_id = video_id.substring(0, ampersandPosition);
            }
            // console.log(`The video ID is ${video_id}`)
            return video_id
        }
    }

    // onclick of a button I need to grab the current location of the video, 
    // grab the {notebook_id: , content: , material_time_stamp: }
    const test = (video_time) => {
        props.setCurrentNotepadDetails({ ...props.currentNotepadDetails, material_time_stamp: video_time })
        console.log("details", props.currentNotepadDetails)
        console.log("content", props.currentNotepadContent)
        // can I get the quill editor info here?
        // can I get the youtube info here?
    }

    const getInfo = () => {
        console.log("current notepad content", props.currentNotepadContent)
        console.log("current notepad details", props.currentNotepadDetails)
    }

    const getTotalTime = (time) => {
        setTotalTime(time)
    }

    const postNewNote = (video_time) => {

        props.setCurrentNotepadDetails({ ...props.currentNotepadDetails, material_time_stamp: video_time })
        
        let data = { ...props.currentNotepadContent, ...props.currentNotepadDetails, material_time_stamp: video_time }
        if(!data.content){
            console.log("No content.")
        } else if (!data.notebook_id){
            console.log("Issue with ID")
        } else if (data.material_time_stamp >= 0){
            console.log("posting...", props.currentNotepadDetails)
            //post to notes=
            props.postNotes(data) 

        }
    }


    return (
        <div className="fade-in">
            <Row marginLeft={80}>
                <Layout width={8} >
                    <F2 font="secondary"> Notebook: </F2>
                    {props.currentNotebook.material_url && props.currentNotebook.material_url.includes("youtube") && <Youtube id={getYoutubeIDFromURL(props.currentNotebook.material_url)} onClick={postNewNote} notes={props.currentNotebook.notes} getTotalTime={getTotalTime}/>}
                    {/* <Timeline notes={props.currentNotebook.notes} totalTime={totalTime}/> */}
                    <QuillEditorV2 />
                </Layout>
                <Layout width={4}>
    <F2 font="secondary"> Notes: {!props.navlingHidden && <HideIcon orientation={props.navlingHidden} onClick={props.navlingHidden ? props.showNavling : props.hideNavling} />}</F2>
                    <NotesScroller info={props.currentNotebook.notes} height={600} style={"show"} placeholder="No notes currently." headerTitle="" />
                    
                </Layout>
            </Row>
            <Row marginTop={30} marginLeft={3} >
                <Layout width={6}>
                    
                </Layout>
                <Layout width={6}>
                    
                </Layout>
            </Row>
        </div>
    )
}



const mapStateToProps = (state) => {
    return {
        notebooks: state.notebooks,
        currentNotebook: state.currentNotebook,
        navlingHidden: state.navlingHidden,
        currentNotepadContent: state.currentNotepadContent,
        currentNotepadDetails: state.currentNotepadDetails
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchNotebook: (id) => dispatch(fetchNotebook(id)),
        hideNavling: () => dispatch(hideNavling()),
        showNavling: () => dispatch(showNavling()),
        setCurrentNotepadContent: (content) => dispatch(setCurrentNotepadContent(content)),
        setCurrentNotepadDetails: (content) => dispatch(setCurrentNotepadDetails(content)),
        postNotes: (data) => dispatch(postNotes(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotebookShow);