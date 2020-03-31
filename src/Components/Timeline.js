//this timeline component will take many notes from the redux

import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Notetag from './Notetag'


const useStyles = makeStyles({
    root: {
        width: 840
    },
    st0: {
        fill: "#FFD000",
    }
});

export default function Timeline(props){
    const classes = useStyles(props)


    const renderTags = () => {
        console.log(props.tags)
    }

    return(
        <div className={classes.root}>
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 829.99 20.67"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <rect x="9.5" y="3.34" class={classes.st0} width="811" height="14" />
            </svg>

            <Notetag selected={true} totalTime={props.totalTime} position={50} goToSpecifiedTime={props.goToSpecifiedTime}/>
            <Notetag selected={false} totalTime={props.totalTime} position={75} goToSpecifiedTime={props.goToSpecifiedTime}/>
            <Notetag selected={false} totalTime={props.totalTime} position={89} goToSpecifiedTime={props.goToSpecifiedTime}/>
            {/* //need to pass down total time in video
            //need to pass down the timestamp
            //need to divide to get the real number (could be a percentage or something or pixels
            //will figure it out.) */}
        </div>
    )
}