import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles({
    root: {
        height: props => {
            if (props.height) {
                return props.height
            } else {
                return 30
            }
        },
        width: props => {
            if (props.width) {
                return props.width
            } else {
                return 30
            }
        },
        display: "inline-block",
        position: 'relative',
        // left: "48%",
        cursor: "pointer",
    },
    st0: {
        fill: "#00B79D"
    },
    st1: {
        fill: "#00B79D"
    }
});

export default function LeftBackIcon(props) {
    const classes = useStyles(props)

   

    return (
        <div className={classes.root} onClick={props.onClick}>
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 225.3 225.06"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <g>

                    <rect x="157.99" y="34.32" transform="matrix(0.7071 0.7071 -0.7071 0.7071 83.05 -122.6091)" className={classes.st0} width="63.07" height="9.24" />
                    <polygon className={classes.st0} points="153.58,120.26 109.36,76.05 166.27,27.6 200.48,61.82 	" />
                    <path className={classes.st0} d="M144.74,172.17L54.38,81.82c12.51-7.94,27.98-10.55,44.98-10.38l59.21,59.98
		C156.55,149.38,152.89,164.17,144.74,172.17z"/>
                    <polygon className={classes.st0} points="46.05,190.11 29.28,199.73 38.75,182.8 95.14,126.41 102.44,133.72 	" />
                </g>
            </svg>
        </div>
    )
}