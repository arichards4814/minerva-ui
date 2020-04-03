import React from 'react'
import { makeStyles } from '@material-ui/core'
import F3 from '../Typing/F3'
import LongCard from '../Components/LongCard'

const useStyles = makeStyles({
    root: {
        height: 800,
        alignContent: "top"
    },
    debug: {
        height: 800,
        borderStyle: "solid",
        verticalAlign: "top"
    }
})

const LongCardScroller = props => {
    const classes = useStyles(props)

    const renderCards = () => {
        return props.info.map(lesson => <LongCard key={lesson.id}{...lesson} />)
    }

    return (
        <div className={props.debug ? classes.debug : classes.root}>
            {props.info ? renderCards() : <F3> There are no lessons for this Curriculum </F3>}
        </div>
    )
}


export default LongCardScroller