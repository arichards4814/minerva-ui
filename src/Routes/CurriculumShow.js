import React, { useState, useEffect } from 'react'
import CreatorHeader from '../Icons/Headers/CreatorHeader'
import Row from '../Container/Row'
import Layout from '../Container/Layout'
import F2 from '../Typing/F2'
import F3 from '../Typing/F3'
import { useLocation } from "react-router-dom";
import TitleBox from '../Components/TitleBox'
import Display from '../Container/Display'
import LongCardScroller from '../Container/LongCardScroller'
import { useHistory } from 'react-router-dom'
import Snackling from '../Components/Snackling'
import Button from '../Components/Button'
import { makeStyles } from '@material-ui/core'

// redux
import { connect } from 'react-redux';
import { fetchCurriculum, setCurrentLesson, postNotebooks, postSubscription } from '../actionCreators'


const useStyles = makeStyles({
    buttonPlacement: {
        margin: 20
    }
})

const CurriculumShow = props => {
    const location = useLocation().pathname.split("/")[2]
    const history = useHistory()
    const classes = useStyles(props)


    //For Snackling
    const [snacklingMessage, setSnacklingMessage] = useState("A notebook has been created.")
    

    useEffect(() => {
        if(parseInt(location) && props.fetchCurriculum){
            props.fetchCurriculum(parseInt(location))
        }
        props.setCurrentLesson({})
        props.setCurrentNotebook({})
    }, [])


    const createNewNotebook = () => {
        console.log("inside create")
        if(props.currentLesson){
            let data = {
                user_id: 40,
                title: props.currentLesson.title,
                material_url: props.currentLesson.material_url
            }

            props.postNotebooks(data)
        }
    }

    const goToNotebook = () => {
        history.push(`/notebooks/${props.currentNotebook.id}`)
    }

    const subscribe = () => {
        console.log("subscribing...")
        //shouldn't be able to do it if already subscribed.

        //post to subscriptions with user_id and curriculum_id
        //curriculum_id is stored in props.currentCurriculum
        //can probably go through the subscriptions array to find that out.
        let data = {
            curriculum_id: props.currentCurriculum.id,
            user_id: 40
        }

        props.postSubscription(data)
    }

    return (
        <div className="fade-in">
            <Row marginLeft={80}>
                <Layout width={4} >
                    <F2 font="secondary"> Curriculum</F2>
                    <TitleBox style="rounded" theme="secondary" paddingLeft={3}><F3 font="secondary">{props.currentCurriculum.title}</F3></TitleBox>
                    <div className={classes.buttonPlacement}>
                        <Button onClick={subscribe}>Subscribe</Button>
                    </div>
                </Layout>
                <Layout width={7}>
                    <CreatorHeader />
                </Layout>
            </Row>
            <Row marginTop={30} marginLeft={3} >
                <Layout width={6}>
                        <Display {...props.currentLesson} imgHeight={400} imgWidth={"95%"} onClick={createNewNotebook}/>
                </Layout>
                <Layout width={6}>
                    <LongCardScroller info={props.currentCurriculum.lessons} style={"show"} placeholder="There are no lessons in this curriculum" headerTitle="Lessons:" />
                </Layout>

            </Row>
              
            {/* </Row> */}
            {props.currentNotebook.id && <Snackling width={500} theme="minerva" icon="plus" onClick={goToNotebook} value={snacklingMessage}></Snackling>}   
        </div>
    )
}



const mapStateToProps = (state) => {
    return {
        currentCurriculum: state.currentCurriculum,
        currentLesson: state.currentLesson,
        currentNotebook: state.currentNotebook
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCurriculum: (id) => dispatch(fetchCurriculum(id)),
        setCurrentLesson: (lesson) => dispatch(setCurrentLesson(lesson)),
        setCurrentNotebook: (notebook) => dispatch(setCurrentLesson(notebook)),
        postNotebooks: (data) => dispatch(postNotebooks(data)),
        postSubscription: (data) => dispatch(postSubscription(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurriculumShow);