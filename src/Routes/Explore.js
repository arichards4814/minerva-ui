import React from 'react'
import ExploreHeader from '../Icons/Headers/ExploreHeader'
import Row from '../Container/Row'
import Layout from '../Container/Layout'
import TitleBox from '../Components/TitleBox'
import F2 from '../Typing/F2'

// redux
import { connect } from 'react-redux';
import { likeActionCreator } from '../actionCreators'


export default function Explore(props) {

    return (
        <div className="fade-in">
            <Row>
                <Layout width={5}>
                    {/* <F2 font="secondary"> Explore</F2> */}
                    <TitleBox theme="secondary" style="rounded"></TitleBox>
                </Layout>
                <Layout width={7}>
                    <ExploreHeader />
                </Layout>
            </Row>
            
            
        </div>
    )
}