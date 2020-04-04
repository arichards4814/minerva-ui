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
import AddLessonForm from '../Components/Forms/AddLessonForm'
import MinervaInput from '../Components/Forms/MinervaInput'

import EditImage from '../Icons/EditImage'
import AddNew from '../Icons/AddNew'
import EditExisting from '../Icons/EditExisting'

// redux
import { connect } from 'react-redux';
import { fetchCurriculum, setCurrentLesson } from '../actionCreators'


const CurriculumEdit = props => {
    const location = useLocation().pathname.split("/")[2]

    const [formState, setFormState] = useState(2)
    //form states
    //0 - Edit Details
    //1 - Edit Image
    //2 - Add Lessons

    useEffect(() => {
        if (parseInt(location) && props.fetchCurriculum) {
            props.fetchCurriculum(parseInt(location))
        }
    }, [])

    const alterFormState = (index) => {
        setFormState(index)
        document.getElementById("minerva-input").focus()
    }

    const handlePageTitle = () => {
        switch(formState){
            case 0:
                return "Edit Details"
            case 1:
                return "Edit Image"
            case 2:
                return "Add Lessons"
            default:
                return "Add Lessons"
        }
    }


    return (
        <div className="fade-in">
            <Row marginLeft={80}>
                <Layout width={4} >
                    <F2 font="secondary"> Curriculum Creator: <br>
                    </br>{handlePageTitle()}</F2>
                    {formState === 0 ? <MinervaInput type="text" theme="secondary" width={500} value={props.currentCurriculum.title} placeholder="Change title..." /> :
                    <TitleBox style="rounded" theme="secondary" paddingLeft={3}><F3 font="secondary">{props.currentCurriculum.title}</F3></TitleBox>
                    }
                    {/*  */}
                    
                    {/* <SearchButton theme="secondary" onClick={handleClick}></SearchButton> */}
                    <Row>
                        <EditImage tooltip="bottom" content="Change Image" onClick={() => alterFormState(1)}/>
                        <EditExisting tooltip="bottom" content="Edit Details" onClick={() => alterFormState(0)}/>
                        <AddNew tooltip="bottom" content="Add Lessons" onClick={() => alterFormState(2)}/>
                    </Row>
                </Layout>
                <Layout width={7}>
                    <CreatorHeader />
                </Layout>
            </Row>
            <Row marginTop={30} marginLeft={80} >
                <Layout width={6}>
                    <LongCardScroller info={props.currentCurriculum.lessons} placeholder="There are no lessons in this curriculum" headerTitle="Lessons:" />
                </Layout>
                <Layout width={6}>
                    <AddLessonForm />
                    {/* <Display {...props.currentLesson} imgHeight={400} imgWidth={"95%"} /> */}
                </Layout>

            </Row>

            {/* </Row> */}

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
        fetchCurriculum: (id) => dispatch(fetchCurriculum(id)),
        setCurrentLesson: (lesson) => dispatch(setCurrentLesson(lesson))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurriculumEdit);