import React, { useState, useEffect } from 'react'
import CreatorHeader from '../Icons/Headers/CreatorHeader'
import Row from '../Container/Row'
import Layout from '../Container/Layout'
import F2 from '../Typing/F2'
import F3 from '../Typing/F3'
import F6 from '../Typing/F3'
import { useLocation } from "react-router-dom";
import TitleBox from '../Components/TitleBox'
import Display from '../Container/Display'
import LongCardScroller from '../Container/LongCardScroller'
import MinervaInput from '../Components/Forms/MinervaInput'
import SearchButton from '../Components/Forms/SeachButton'
import EditExisting from '../Icons/EditExisting'
import { makeStyles } from '@material-ui/core'

import * as requests from '../requests'

// redux
import { connect } from 'react-redux';
import { fetchCurriculum, setCurrentLesson } from '../actionCreators'

const useStyles = makeStyles({
    footer: {
        position: "absolute",
        bottom: 60,
        left: "45%"
    }
})
const Creator = props => {
    const classes = useStyles(props)
    const location = useLocation().pathname.split("/")[2]
    const [formTitle, setFormTitle] = useState("")
    const [errors, setErrors] = useState("")

    const [stage, setStage] = useState(0)

    const [newCurriculumTitle, setNewCurriculumTitle] = useState("")
    const [newCurriculumDescription, setNewCurriculumDescription] = useState("")
    const [newCurriculumImage, setNewCurriculumImage] = useState("")

    useEffect(() => {
        if (parseInt(location) && props.fetchCurriculum) {
            props.fetchCurriculum(parseInt(location))
        }
    }, [])

    const handleChange = (e) => {
        setFormTitle(e.target.value)
    }
    
    const handleClick0 = () => {
        if (formTitle === ""){
            setErrors("You must enter a name for your curriculum.")
        } else {
            setNewCurriculumTitle(formTitle)
            setStage(1)
            setFormTitle("")
            setErrors("")
        }
    }

    const handleClick1 = () => {
        setNewCurriculumDescription(formTitle)
        setStage(2)
        setFormTitle("")
    }

    const handleClick2 = () => {
        setNewCurriculumImage(formTitle)
        setStage(3)
        setFormTitle("")
    }

    const submitFinalForm = () => {
        let data ={
            curriculum: {
                user_id: 40,
                title: newCurriculumTitle,
                description: newCurriculumDescription,
                image_url: newCurriculumImage
            }
        }
        requests.postCurriculums(data)

        // this should probably be through the reducer so I can 
        // add to state
    }


    return (
        <div className="fade-in">
            <Row marginLeft={80}>
                <Layout width={4} >
                    <F2 font="secondary"> Curriculum Creator</F2>
                    {/* <TitleBox style="rounded" theme="secondary" paddingLeft={3}><F3 font="secondary">{props.currentCurriculum.title}</F3></TitleBox> */}
                    Welcome to the curriculum creator. Here you can build
                    amazing lists of videos, blogs, websites... anything
                    that's helped you learn. <br></br><br></br>Begin by naming your curriculum,
                    giving it a description and setting an image.
                </Layout>
                <Layout width={7}>
                    <CreatorHeader />
                </Layout>
            </Row>
            <Row>
                <Layout width={3}>
                </Layout>
                <Layout width={6}>
                    {stage === 0 && <div>
                        <F2 font="secondary">Title</F2>
                    <MinervaInput width={500} height={75} fontSize={25} type="text" theme="secondary" onChange={handleChange} value={formTitle} placeholder="Name Your Curriculum..." />
                    <SearchButton theme="secondary" onClick={handleClick0} value="Next"></SearchButton>
                    </div>}

                    {stage === 1 && <div>
                        <F2 font="secondary">Description</F2>
                        <MinervaInput width={500} height={75} fontSize={14} type="text" theme="secondary" onChange={handleChange} value={formTitle} placeholder="Set a description for this curriculum..." />
                        <SearchButton theme="secondary" onClick={handleClick1} value="Next"></SearchButton>
                    </div>}

                    {stage === 2 && <div>
                        <F2 font="secondary">Image</F2>
                        <MinervaInput width={500} height={75} fontSize={14} type="text" theme="secondary" onChange={handleChange} value={formTitle} placeholder="Set a main image for this curriculum..." />
                        <SearchButton theme="secondary" onClick={handleClick2} value="Next"></SearchButton>
                        <img src={formTitle} style={{width: 500, height: 300}}></img>
                    </div>}

                    {stage === 3 && <div style={{textAlign: "center", marginTop: 30}}>
                        <SearchButton width={300} height={100} fontSize={80} onClick={submitFinalForm} theme="secondary" value="Create and add lessons!"></SearchButton>
                        </div>}
                    
                    <div style={{marginTop: 20, marginLeft: 20}}>
                        {errors}
                    </div>
                </Layout>
                <Layout width={3}>
                </Layout>
            </Row>

            <div className={classes.footer}>
                
                        <EditExisting width={100}/>
                    
            </div>

        </div>
    )
}



const mapStateToProps = (state) => {
    return {
        currentCurriculum: state.currentCurriculum,
        currentLesson: state.currentLesson
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // first you'll click a button to initialize the curriculum
        // then maybe this should just turn into an edit
        // here going to have a post method
        fetchCurriculum: (id) => dispatch(fetchCurriculum(id)),
        setCurrentLesson: (lesson) => dispatch(setCurrentLesson(lesson))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Creator);