import React from 'react'
import { makeStyles } from '@material-ui/core'
import HandleScheme from '../../Schemes/HandleScheme'

const useStyles = makeStyles({
    root: {
        borderWidth: 8,
        borderColor: props => HandleScheme(props),
        borderStyle: "solid",
        borderRadius: "40px",
        paddingLeft: 20,
        width: 300,
        height: 50,
        outline: 0,
        fontSize: 16
    }
})

export default function MinervaInput(props){
    const classes = useStyles(props)

    return(
        <input className={classes.root} type={props.type} onChange={props.onChange} value={props.value} placeholder={props.placeholder}></input>
    )
}