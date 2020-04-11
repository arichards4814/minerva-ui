import React, { useEffect } from 'react';
import './App.css';
import Navling from './Container/Navling'
import Home from './Routes/Home'
import Notebooks from './Routes/Notebooks'
import Creator from './Routes/Creator'
import Explore from './Routes/Explore'
import CurriculumShow from './Routes/CurriculumShow';
import CurriculumEdit from './Routes/CurriculumEdit';
import NotebookShow from './Routes/NotebookShow';
import Signup from './Routes/Signup';
import Login from './Routes/Login';

import history from './history.js'


// redux
import { connect } from 'react-redux';
import { fetchCurriculums, fetchCurrentUser } from './actionCreators'

import {
  Router,
  Switch,
  Route
} from "react-router-dom";


const App = props => {

  //ask isabelle about this
  useEffect(() => {
    if (localStorage.user_id) {
      console.log("test", localStorage.user_id)
      props.fetchCurrentUser(localStorage.user_id)
    }
    props.fetchCurriculums()
    
  }, [])

  return (
    <div >
      <Router history={history}>
        <Navling />
        <Switch>
          <Route path="/notebooks/:id">
            <NotebookShow />
          </Route>
          <Route path="/notebooks">
            <Notebooks />
          </Route>
          <Route path="/explore">
            <Explore />
          </Route>
          <Route path="/creator">
            <Creator />
          </Route>
          <Route path="/editcurriculums/:id">
            <CurriculumEdit />
          </Route>
          <Route path="/curriculums/:id">
            <CurriculumShow />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
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
    curriculums: state.curriculums
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCurriculums: () => dispatch(fetchCurriculums()),
    fetchCurrentUser: (id) => dispatch(fetchCurrentUser(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
