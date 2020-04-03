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

// redux
import { connect } from 'react-redux';
import { fetchCurriculum, setCurrentLesson } from '../actionCreators'


const CurriculumEdit = props => {
    const location = useLocation().pathname.split("/")[2]

    useEffect(() => {
        if (parseInt(location) && props.fetchCurriculum) {
            props.fetchCurriculum(parseInt(location))
        }
    }, [])


    return (
        <div className="fade-in">
            <Row marginLeft={80}>
                <Layout width={4} >
                    <F2 font="secondary"> Curriculum Creator: <br>
                    </br>Add Lessons</F2>
                    <TitleBox style="rounded" theme="secondary" paddingLeft={3}><F3 font="secondary">{props.currentCurriculum.title}</F3></TitleBox>
                    {/* <MinervaInput type="text" theme="secondary" onChange={handleChange} value={search} placeholder="Expand your mind..." /> */}
                    {/* <SearchButton theme="secondary" onClick={handleClick}></SearchButton> */}
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