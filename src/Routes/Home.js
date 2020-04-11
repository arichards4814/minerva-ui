import React from 'react'
import MajesticButton from '../Components/MajesticButton'
import F3 from '../Typing/F3'
import F4 from '../Typing/F4'
import Row from '../Container/Row'
import Layout from '../Container/Layout'
import TitleBox from '../Components/TitleBox'
import Card from '../Components/Card'
import LoadingAnimation from '../Components/LoadingAnimation'
import LoginPopper from '../Components/LoginPopper'
import { useHistory } from 'react-router-dom'


// redux
import { connect } from 'react-redux';
import { likeActionCreator, fetchCurriculums } from '../actionCreators'

import { makeStyles } from '@material-ui/core'
import LargeImage from '../Components/LargeImage'

const useStyles = makeStyles({
    leftToRightScroll: {
        marginTop: 30,
        marginBottom: 30,
        overflowX: 'scroll',
        overflowY: 'hidden',
        whiteSpace: 'nowrap',
        paddingBottom: 10,
        width: "80%",
        marginLeft: "10%"
    }
})

const Home = props =>{
    const classes = useStyles(props)
    let history = useHistory()

    
    const renderCurriculums = () => {
        if(props.curriculums){
           return props.curriculums.map(curriculum => <Card key={curriculum.id} {...curriculum} onClick={() => history.push(`/curriculums/${curriculum.id}`)}/>)
        }
    }

    return(
        <div className="fade-in">
            {!props.currentUser && <LoginPopper />}
            <Row marginTop={40} marginBottom={40}>
                <Layout width={4} align="center">
                    <MajesticButton onClick={() => history.push("/explore")}><F3 font="secondary">Explore Curriculums</F3></MajesticButton>
                </Layout >
                <Layout width={4} align="center">
                    <MajesticButton onClick={() => history.push("/notebooks")}><F3 font="secondary">My Notebooks</F3></MajesticButton>
                </Layout>
                <Layout width={4} align="center">
                    <MajesticButton onClick={() => history.push("/creator")}><F3 font="secondary">Create Curriculums</F3></MajesticButton>
                </Layout>
            </Row>
            <Row marginLeft="10%">
                <TitleBox theme="secondary"><F4 font="secondary">Popular Right Now:</F4></TitleBox>
            </Row>
            <div className={classes.leftToRightScroll}>
                    {props.curriculums ? renderCurriculums() : <LoadingAnimation />}
            </div>

            <Row marginLeft="10%">
                <TitleBox theme="secondary"><F4 font="secondary">Guides on Using Minerva:</F4></TitleBox>
            </Row>
            <Row marginLeft="5%">
                <LargeImage title="How to Use Minerva" src="https://www.lifewire.com/thmb/phOueq0VY9hLR7W4MhzyccQPkP0=/4395x2933/filters:no_upscale():max_bytes(150000):strip_icc()/library-b694b8c4b0334227a4d614158cc1deb6.jpg" />
            </Row>
        </div>
    )
}




const mapStateToProps = (state) => {
    return {
        curriculums: state.curriculums,
        currentUser: state.currentUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCurriculums: () => dispatch(fetchCurriculums())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);