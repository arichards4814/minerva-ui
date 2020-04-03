import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Tooltip from '../Components/Tooltip'


const useStyles = makeStyles({
    st0: {
        fill: "#00B79D"
    },
    st1: {
        fill: "#FFFFFF"
    }
});

export default function BackIcon(props) {
    const classes = useStyles()

    const [hovered, setHovered] = useState(false)

    const handleHover = () => {
        setHovered(true)
    }
    const handleMouseOut = () => {
        setHovered(false)

    }

    return (
        <div className={"selected icon-hover"} onMouseOver={handleHover} onMouseOut={handleMouseOut} onClick={props.onClick}>
            <div style={{ marginLeft: "32%" }}>
                <Tooltip width={100} content="Go Back" showing={hovered ? "visible" : "hidden"} />
            </div>
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 242.29 242.04"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <g>
                    <circle className={classes.st0} cx="121.15" cy="121.02" r="116" />
                    <polygon className={classes.st1} points="154.09,181.57 137.48,197.62 61.17,121.32 61.41,121.08 61.32,120.99 137.9,44.41 153.95,61.02 
		            93.75,121.23 	"/>
                </g>
            </svg>
        </div>
    )
}