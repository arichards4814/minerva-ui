import React from 'react'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles({
    root:{
        height: 25,
        width: 13.51,
        position: "absolute",
        left: props => Math.floor((840 * props.position) / props.totalTime),
        bottom: 135
    },
    st0: {
        fill: "#00D1A9",
    },
    selected: {
        fill: "#ED3466"
    }
});

export default function Notetag(props){
    
    const classes = useStyles(props)
    //will be out of the length of the timeline, think 840
    //there will be an on click event that passes in a noteid

    console.log(Math.floor((840 * props.position) / props.totalTime))

    return(
        <div className={classes.root + " notetag"} onClick={() => props.goToSpecifiedTime(props.position)}>
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 13.51 25"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
            <polygon class={props.selected ? classes.selected : classes.st0} points="0,25 13.51,25 13.51,7.43 6.76,0 0,7.43 " />
        </svg>

        </div>
    )
}