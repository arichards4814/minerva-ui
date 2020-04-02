import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import F1 from '../Typing/F1'

const useStyles = makeStyles({
    root: {
        height: 600,
        width: 800
    },
    hovered: {
        opacity: .8,
        cursor: "pointer"
    },
    overlay: {
        position: "relative",
        top: 100,
        left: 10
    }
})
export default function LargeImage(props){
    const classes = useStyles(props)
    const [hovered, setHovered] = useState(false)


    const handleHover = () => {
        setHovered(true)
    }
    const unHover = () => {
        setHovered(false)
    }


    return(
        <div className={hovered ? classes.hovered : classes.root} onMouseOver={handleHover} onMouseOut={unHover}>
            <div className={classes.overlay} >
                <F1 color="white" font="secondary">{props.title}</F1>
            </div>
            <img className={classes.root} src={props.src}></img>
        </div>
    )
}