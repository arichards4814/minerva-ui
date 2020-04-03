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

// redux
import { connect } from 'react-redux';
import { fetchCurriculum } from '../actionCreators'


const CurriculumShow = props => {
    const location = useLocation().pathname.split("/")[2]
    const [selectedLesson, setSelectedLesson] = useState({
        title: "Testing123",
        imgSrc: "",
        description: "Lorem ipsum dodo bunchy."
    })
    
    useEffect(() => {
        if(parseInt(location)){
            props.fetchCurriculum(parseInt(location))
        }
    }, [])

    return (
        <div className="fade-in">
            <Row marginLeft={80}>
                <Layout width={4} >
                    <F2 font="secondary"> Curriculum</F2>
                    <TitleBox style="rounded" theme="secondary" paddingLeft={3}><F3 font="secondary">{props.currentCurriculum.title}</F3></TitleBox>
                    {/* <MinervaInput type="text" theme="secondary" onChange={handleChange} value={search} placeholder="Expand your mind..." /> */}
                    {/* <SearchButton theme="secondary" onClick={handleClick}></SearchButton> */}
                </Layout>
                <Layout width={7}>
                    <CreatorHeader />
                </Layout>
            </Row>
            <Row marginTop={30} marginLeft={3} >
                <Layout width={6}>
                        <Display {...selectedLesson} imgHeight={400} imgWidth={"95%"} />
                </Layout>
                <Layout width={6}>
                    <LongCardScroller info={props.currentCurriculum.lessons} debug="yes" />
                </Layout>

            </Row>
              
            {/* </Row> */}

        </div>
    )
}



const mapStateToProps = (state) => {
    return {
        currentCurriculum: state.currentCurriculum
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCurriculum: (id) => dispatch(fetchCurriculum(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurriculumShow);