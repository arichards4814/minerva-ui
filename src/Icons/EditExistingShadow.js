import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Tooltip from '../Components/Tooltip'


const useStyles = makeStyles({
    st0: {
        fill: "#ED2F65",
        stroke: "#FFFFFF",
        strokeMiterlimit: 10
    },
    st1: {
        fill: "url(#SVGID_1_)"
    },
    st2: {
        fill: "#FFFFFF"
    }
});

export default function EditExistingShadow(props) {
    const classes = useStyles()

    const [hovered, setHovered] = useState(false)

    const handleHover = () => {
        setHovered(true)
    }
    const handleMouseOut = () => {
        setHovered(false)

    }

    return (
        <div className={"selected icon-hover"} onMouseOver={handleHover} onMouseOut={handleMouseOut}>
            <div style={{marginLeft: "35%"}}>
                <Tooltip width={100} content="Edit Existing" showing={hovered ? "visible" : "hidden"} />
            </div>
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 242.29 341"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <circle className={classes.st0} cx="121.15" cy="121.02" r="116" />
                <radialGradient id="SVGID_1_" cx="121.1467" cy="307.3101" r="83.8509" gradientUnits="userSpaceOnUse">
                    <stop offset="0" style={{stopColor: "#7C7C7C"}}/>
                    <stop offset="1" style={{ stopColor: "#FFFFFF" }}/>
                </radialGradient>
                <ellipse className={classes.st1} cx="121.15" cy="307.31" rx="116" ry="24.6" />
                <g>
                    <polygon className={classes.st2} points="147.07,78.45 70.49,155.03 86.82,171.36 163.12,95.06 	" />
                    <path className={classes.st2} d="M161.56,63.81l-10.41,10.41l16.33,16.33l10.3-10.3c2.67-2.67,2.71-6.99,0.08-9.71l-6.43-6.65
		            C168.75,61.11,164.3,61.08,161.56,63.81z"/>
                    <polygon className={classes.st2} points="67.69,158.71 62.48,180.25 83.74,175.33 	" />
                </g>
            </svg>
        </div>
    )
}