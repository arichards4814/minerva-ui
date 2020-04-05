import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import F4 from '../Typing/F4'
import F5 from '../Typing/F5'
import F6 from '../Typing/F6'


import { connect } from 'react-redux';
import { setCurrentLesson } from '../actionCreators'


const useStyles = makeStyles({
    root: {
        // borderStyle: "solid",
        width: 500,
        height: 120,
        borderRadius: 10,
        // borderWidth: 2,
        boxShadow: "2px 4px 6px #888888",
        display: "inline-block",
        margin: props => {
            if (props.margin) {
                return props.margin
            } else {
                return 10
            }
        }
    },
    hovered: {
        // borderStyle: "solid",
        width: 500,
        height: 120,
        borderRadius: 10,
        // borderWidth: 2,
        boxShadow: "10px 10px 6px #888888",
        display: "inline-block",
        margin: props => {
            if (props.margin) {
                return props.margin
            } else {
                return 10
            }
        },
        position: "relative",
        transform: 'translateX(10px)',
        transform: 'translateY(-10px)',

        cursor: 'pointer'
    },
    cardHeader: {
        height: "2%"
    },
    cardImage: {
        height: "90%",
        width: "25%",
        backgroundColor: "gray",
        display: "inline-block",
        margin: 2,
        verticalAlign: "top"
    },
    rightSide: {
        display: "inline-block",
        verticalAlign: "top"
    },
    cardTitle: {
        height: "12%"
    },
    cardBody: {
        height: "30%",
        backgroundColor: "white"
    },
    cardFooter: {
        marginTop: 2,
        textAlign: "center",
        height: "2%"
    },
});

const LongCard = props => {
    const classes = useStyles()
    //hmm, how big should a card be? Should I have sm, md, lg? 
    const [hovered, setHovered] = useState(false)

    const handleHover = () => {
        setHovered(true)
    }
    const unHover = () => {
        setHovered(false)
    }

    return (
        <div className={hovered ? classes.hovered : classes.root} onMouseOver={handleHover} onMouseOut={unHover} onClick={() => props.setCurrentLesson(props.lesson)}>
            <div className={classes.cardHeader}>

            </div>
            <div className={classes.cardImage}>
                {props.lesson.image_url && <img src={props.lesson.image_url} style={{ height: "100%", width: "100%" }}></img>}
            </div>
            <div className={classes.rightSide}>
                <div className={classes.cardTitle}>
                    <F5>{props.lesson.title}</F5>
                </div>
                <div className={classes.cardBody}>
                    <F6>{props.lesson.description}</F6>
                </div>
            </div>
            
            <div className={classes.cardFooter}>
            </div>
        </div>
    )
}



const mapStateToProps = (state) => {
    return {
        currentLesson: state.currentLesson
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentLesson: (lesson) => dispatch(setCurrentLesson(lesson))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LongCard);