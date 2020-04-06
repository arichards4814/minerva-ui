import React, { useState, useEffect } from 'react'
import NotebooksHeader from '../Icons/Headers/NotebooksHeader'
import Row from '../Container/Row'
import Layout from '../Container/Layout'
import F2 from '../Typing/F2'
import { useLocation } from "react-router-dom";
import NotebookPreview from '../Container/NotebookPreview'
import LongCardScroller from '../Container/LongCardScroller'
import Youtube from '../Components/Youtube'
import QuillEditor from '../Components/QuillEditor'

import HideIcon from '../Icons/HideIcon'

// redux
import { connect } from 'react-redux';
import { hideNavling, showNavling, fetchNotebook } from '../actionCreators'


const NotebookShow = props => {
    const location = useLocation().pathname.split("/")[2]

    useEffect(() => {
        props.fetchNotebook(location)
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
            console.log(`The video ID is ${video_id}`)
            // this.execute(video_id)
            return video_id
        }
    }

    return (
        <div className="fade-in">
            <Row marginLeft={80}>
                <Layout width={8} >
                    <F2 font="secondary"> Notebook: </F2><HideIcon orientation={props.navlingHidden} onClick={props.navlingHidden ? props.showNavling : props.hideNavling}/>
                    {props.currentNotebook.material_url && props.currentNotebook.material_url.includes("youtube") && <Youtube id={getYoutubeIDFromURL(props.currentNotebook.material_url)}/>}
                    <QuillEditor />
                </Layout>
                <Layout width={4}>
                    {/* a long card scroller with notes will go here */}

                    <LongCardScroller info={props.currentNotebook.notes} height={600} style={"show"} placeholder="No notes currently." headerTitle="Notes:" />

                </Layout>
            </Row>
            <Row marginTop={30} marginLeft={3} >
                <Layout width={6}>
                    {/* <NotebookPreview {...props.currentNotebook} /> */}
                    
                </Layout>
                <Layout width={6}>
                     </Layout>
            </Row>

            <button onClick={props.hideNavling}>Hide</button>
            <button onClick={props.showNavling}>Show</button>

            {/* </Row> */}

        </div>
    )
}



const mapStateToProps = (state) => {
    return {
        notebooks: state.notebooks,
        currentNotebook: state.currentNotebook,
        navlingHidden: state.navlingHidden
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchNotebook: (id) => dispatch(fetchNotebook(id)),
        hideNavling: () => dispatch(hideNavling()),
        showNavling: () => dispatch(showNavling())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotebookShow);