import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from './Button'
import F4 from '../Typing/F4'
import F5 from '../Typing/F5'
import F6 from '../Typing/F6'


const useStyles = makeStyles({
    root: {
        // borderStyle: "solid",
        width: 300,
        height: 325,
        borderRadius: 10,
        // borderWidth: 2,
        boxShadow: "2px 4px 6px #888888",
        display: "inline-block",
        margin: props => {
            if(props.margin){
                return props.margin
            } else {
                return 10
            }
        },
        backgroundColor: "gray",
    },
    hovered: {
        // borderStyle: "solid",
        width: 300,
        height: 325,
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

        backgroundColor: "gray",
        cursor: 'pointer'
    },
    cardHeader: {
        height: "2%"
    },
    cardImage: {
        height: "50%",
        backgroundColor: "gray"
    },
    cardTitle: {
        paddingTop: 8,
        paddingLeft: 10,
        height: "12%",
        backgroundColor: "gray",
        color: "white"
    },
    cardBody: {
        height: "21%",
        backgroundColor: "white"
    },
    cardFooter: {
        marginTop: 2,
        textAlign: "center",
        height: "14%"
    },
});

export default function Card(props){
    const classes = useStyles()
    //hmm, how big should a card be? Should I have sm, md, lg? 
    const [hovered, setHovered] = useState(false)

    const handleHover = () => {
        setHovered(true)
    }
    const unHover = () => {
        setHovered(false)
    }


    return(
        <div className={hovered ? classes.hovered : classes.root} onMouseOver={handleHover} onMouseOut={unHover}>
            <div className={classes.cardHeader}>

            </div>
            <div className={classes.cardImage}>
                <img src={props.image_url} style={{height: "100%", width: "100%"}}></img>
            </div>
            <div className={classes.cardTitle}>
                <F5>{props.title}</F5>
            </div>
            <div className={classes.cardBody}>
                <F6>{props.description}</F6>
            </div>
            <div className={classes.cardFooter}>
                <Button value="View"><F4 color="black" >View</F4></Button>
            </div>
        </div>
    )
}