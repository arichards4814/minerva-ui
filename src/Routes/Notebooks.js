import React, { useState, useEffect } from 'react'
import NotebooksHeader from '../Icons/Headers/NotebooksHeader'
import Row from '../Container/Row'
import Layout from '../Container/Layout'
import F2 from '../Typing/F2'
import { useLocation, useHistory } from "react-router-dom";
import HideIcon from '../Icons/HideIcon'
import DropdownTile from '../Components/DropdownTile'

// redux
import { connect } from 'react-redux';
import { fetchUsersNotebooks, hideNavling, showNavling, fetchUsersSubscriptions} from '../actionCreators'


const Notebooks = props => {
    const location = useLocation().pathname.split("/")[2]
    const history = useHistory()

    useEffect(() => {

        props.fetchUsersSubscriptions(40)
    }, [])

    const goToNotebook = (id) => {
        if (id) {
            history.push(`/notebooks/${id}`)
        }
    }

    const renderCurriculums = () => {
        if(props.subscriptions.length){
            return props.subscriptions.map(object => <DropdownTile {...object.curriculum} width={300} />)
        }
    }

    console.log("subscriptions", props.subscriptions[0])

    return (
        <div className="fade-in">
            {!props.navlingHidden && <HideIcon orientation={props.navlingHidden} onClick={props.navlingHidden ? props.showNavling : props.hideNavling} />}

            <Row marginLeft={80}>
                <Layout width={4} >
                    <F2 font="secondary"> Notebooks</F2>
                </Layout>
                <Layout width={7}>
                    <NotebooksHeader />
                </Layout>
            </Row>
            <Row marginTop={30} marginLeft={3} >
                <Layout width={6}>
                    Your subscriptions:
                    {renderCurriculums()}
                </Layout>
                <Layout width={6}>
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