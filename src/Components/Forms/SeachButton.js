import React from 'react'
import { makeStyles } from '@material-ui/core'
import HandleScheme from '../../Schemes/HandleScheme'
import F4 from '../../Typing/F4'
import "../../Button.scss"

const useStyles = makeStyles({
    root: {
        borderWidth: 8,
        borderColor: props => HandleScheme(props),
        borderStyle: "solid",
        borderRadius: "40px",
        width: 120,
        height: 50,
        outline: 0,
        fontSize: 16,
        margin: 1,
        cursor: "pointer"
    }
})

export default function MinervaInput(props) {
    const classes = useStyles(props)

    return (
        <button className={classes.root} onClick={props.onClick}><F4 font="secondary">Search</F4></button>
    )
}