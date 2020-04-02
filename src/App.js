import React, { useEffect } from 'react';
import './App.css';
import Navling from './Container/Navling'
import Home from './Routes/Home'
import Notebooks from './Routes/Notebooks'
import Creator from './Routes/Creator'
import Explore from './Routes/Explore'

// redux
import { connect } from 'react-redux';
import { likeActionCreator, fetchCurriculums } from './actionCreators'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


const App = props => {

  //ask isabelle about this
  useEffect(() => {
    props.fetchCurriculums()
  }, [])

  return (
    <div >
      <Router>
        <Navling />
        <Switch>
          <Route path="/notebooks">
            <Notebooks />
          </Route>
          <Route path="/explore">
            <Explore />
          </Route>
          <Route path="/creator">
            <Creator />
          </Route>
          <Route path="/">
            <Home /> 
          </Route>
        </Switch>
      </Router>
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    likes: state.likes,
    curriculums: state.curriculums
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    like: () => dispatch(likeActionCreator()),
    fetchCurriculums: () => dispatch(fetchCurriculums())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
