import React, { useState, useEffect } from 'react'
import ExploreHeader from '../Icons/Headers/ExploreHeader'
import Row from '../Container/Row'
import Layout from '../Container/Layout'
import F2 from '../Typing/F2'
import MinervaInput from '../Components/Forms/MinervaInput'
import Card from '../Components/Card'

// redux
import { connect } from 'react-redux';
import { fetchCurriculums } from '../actionCreators'


const Explore = props => {
    const [search, setSearch] = useState("")


    const renderCurriculums = (filteredCurriculums) => {
        if (props.curriculums) {
            return filteredCurriculums.map(curriculum => <div style={{marginLeft: 20, marginRight: 20, display: "inline-block"}}><Card key={curriculum.id} {...curriculum} /></div>)
        }
    }

    const curriculumsFiltered = (search) => {
        if(search === ""){
            return renderCurriculums(props.curriculums)
        } else {
            let filteredCurriculums = props.curriculums.filter(curriculum => curriculum.title.toLowerCase().includes(search.toLowerCase()))
            return renderCurriculums(filteredCurriculums)
        }
    }

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const handleClick = () => {
        curriculumsFiltered(search)
    }

    return (
        <div className="fade-in">
            <Row marginLeft={80}>
                <Layout width={4} >
                    <F2 font="secondary"> Explore</F2>
                    <MinervaInput type="text" theme="secondary" onChange={handleChange} value={search} placeholder="Expand your mind..."/>
                    {/* <SearchButton theme="secondary" onClick={handleClick}></SearchButton> */}
                </Layout>
                <Layout width={7}>
                    <ExploreHeader />
                </Layout>
            </Row>
            <Row marginTop={30} marginLeft={30}>
                <Layout width={1}>

                </Layout>
                <Layout width={10}>
                    {curriculumsFiltered(search)}
                </Layout>
                <Layout width={1}>
                    
                </Layout>
            </Row>
        </div>
    )
}



const mapStateToProps = (state) => {
    return {
        curriculums: state.curriculums
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCurriculums: () => dispatch(fetchCurriculums())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Explore);