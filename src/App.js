import React, { Component, useState, useEffect } from 'react';
import './App.css';
import Dock from './Container/Dock'
import LoadingAnimation from './Components/LoadingAnimation';
import Navling from './Container/Navling'
import Card from './Components/Card'
import F1 from './Typing/F1'
import F2 from './Typing/F2'
import F3 from './Typing/F3'
import F4 from './Typing/F4'
import F5 from './Typing/F5'
import F6 from './Typing/F6'
import QuillEditor from './Components/QuillEditor'
import Youtube from './Components/Youtube'
import Layout from './Container/Layout'
import Row from './Container/Row'
import Snackling from './Components/Snackling'
import TinyPlus from './Icons/Tiny/TinyPlus'
import TinyNote from './Icons/Tiny/TinyNote'
import TinyQuestion from './Icons/Tiny/TinyQuestion'
import TinyMinus from './Icons/Tiny/TinyMinus'
import SearchFunctions from './Youtube/SearchFunctions'

// redux
import { connect } from 'react-redux';
import { likeActionCreator } from './actionCreators'



const App = props => {

  const [open, setOpen] = useState(true)

  const close = () => {
    setOpen(false)
  }


  return (
    <div >
    <SearchFunctions />
      {/* <button onClick={props.like}> */}
        {/* Like<span role="img" aria-label="thumbs up">👍</span>
      </button>
      <Navling />
      <TinyPlus size={1.5} theme="minerva"/>
      <TinyNote size={1.5} theme="secondary" />
      <TinyQuestion size={1.5} theme="third" />
      <TinyMinus size={1.5} theme="fourth" /> */} */}
      {/* <Youtube id="IBouhf4seWQ" /> */}
      {/* <QuillEditor /> */}
      {/* <LoadingAnimation />  */}
      {/* <Card /> */}
      <div >
        {/* <F1>F1: Explore Curriculums</F1>
        <F2>F2: Explore Curriculums</F2>
        <F3>F3: Explore Curriculums</F3>
        <F4>F4: Explore Curriculums</F4>
        <F5>F5: Explore Curriculums</F5>
        <F6>F6: Explore Curriculums</F6>
        <F1 font="secondary">F1: Explore Curriculums</F1>
        <F2 font="secondary">F2: Explore Curriculums</F2>
        <F3 font="secondary">F3: Explore Curriculums</F3>
        <F4 font="secondary">F4: Explore Curriculums</F4>
        <F5 font="secondary">F5: Explore Curriculums</F5>
        <F6 font="secondary">F6: Explore Curriculums</F6> */}
      </div>
      <Row>
        <Layout width={3}>
          Testing 123
        </Layout>
        <Layout width={3}>
          Testing 123
        </Layout>
      </Row>
      {open && <Snackling theme="minerva" icon="plus" close={close} ></Snackling>} 
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    likes: state.likes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    like: () => dispatch(likeActionCreator())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
