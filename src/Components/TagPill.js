import React from 'react'
import { makeStyles } from '@material-ui/core'
import HandleScheme from '../Schemes/HandleScheme'
import { HandleSchemeTextColor } from '../Schemes/HandleScheme'

const useStyles = makeStyles({
    root:{
        borderRadius: 18,
        borderStyle: "solid",
        maxWidth: 100,
        padding: 3,
        borderWidth: 4,
        textAlign: "center",
        color: props => HandleSchemeTextColor(props),
        borderColor: props => HandleScheme(props),
        cursor: "pointer"
    }
})
const TagPill = props => {
    const classes = useStyles(props)

    // console.log(props)
    return (
        <div className={classes.root}>
            {props.name ? props.name : "None"}
        </div>
    )
}


export default TagPill


