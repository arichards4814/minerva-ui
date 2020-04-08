import React, { useState, useEffect } from 'react'
import NotebooksHeader from '../Icons/Headers/NotebooksHeader'
import Row from '../Container/Row'
import Layout from '../Container/Layout'
import F2 from '../Typing/F2'
import { useLocation, useHistory } from "react-router-dom";
import HideIcon from '../Icons/HideIcon'
import DropdownTile from '../Components/DropdownTile'
import DropdownChild from '../Components/DropdownChild'
// redux
import { connect } from 'react-redux';
import { fetchUsersNotebooks, hideNavling, showNavling, fetchUsersSubscriptions} from '../actionCreators'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    backIcon: {
        position: "absolute",
        right: 300,
        top: 130
    }
})
const Notebooks = props => {
    const location = useLocation().pathname.split("/")[2]
    const history = useHistory()
    const classes = useStyles(props)

    useEffect(() => {
        props.fetchUsersNotebooks(40)
        props.fetchUsersSubscriptions(40)
    }, [])

    const renderCurriculums = () => {
        if(props.subscriptions.length){
            return props.subscriptions.map(object => <DropdownTile {...object.curriculum} width={300} />)
        }
    }

    const renderAllNotebooks = () => {
            console.log(props.notebooks)
            return props.notebooks.map(object => <DropdownChild {...object} width={300} />)
        
    }

    console.log("subscriptions", props.subscriptions[0])

    return (
        <div className="fade-in">
            <div className={classes.backIcon}>
                {!props.navlingHidden && <HideIcon orientation={props.navlingHidden} onClick={props.navlingHidden ? props.showNavling : props.hideNavling} />}
            </div>

            <Row marginLeft={80}>
                <Layout width={4} >
                    <F2 font="secondary"> Notebooks</F2>
                    To start a lesson, create a notebook and then begin.
                </Layout>
                <Layout width={7}>
                    <NotebooksHeader />
                </Layout>
            </Row>
            <Row marginTop={30} marginLeft={50} >
                <Layout width={6}>
                    Based on your subscriptions:
                    {renderCurriculums()}
                </Layout>
                <Layout width={6}>
                    {renderAllNotebooks()}
                </Layout>
            </Row>
        </div>
    )
}



const mapStateToProps = (state) => {
    return {
        notebooks: state.notebooks,
        currentNotebook: state.currentNotebook,
        navlingHidden: state.navlingHidden,
        subscriptions: state.subscriptions
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsersNotebooks: (id) => dispatch(fetchUsersNotebooks(id)),
        hideNavling: () => dispatch(hideNavling()),
        showNavling: () => dispatch(showNavling()),
        fetchUsersSubscriptions: (id) => dispatch(fetchUsersSubscriptions(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notebooks);