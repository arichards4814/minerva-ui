import React from 'react'
import { makeStyles } from '@material-ui/core'
import HandleScheme from '../Schemes/HandleScheme'
import { HandleSchemeTextColor } from '../Schemes/HandleScheme'
import { useHistory } from 'react-router-dom'
import Ex from '../Icons/Tiny/Ex'

const useStyles = makeStyles({
    root:{
        borderRadius: 18,
        borderStyle: "solid",
        maxWidth: 110,
        padding: 5,
        borderWidth: 4,
        textAlign: "center",
        color: props => HandleSchemeTextColor(props),
        borderColor: props => HandleScheme(props),
        cursor: "pointer",
        display: "inline-block",
        margin: 2
    },
    exIcon: {
        display: "inline-block",
        width: "100%"
    }
})
const TagPill = props => {
    const classes = useStyles(props)
    const history = useHistory()

    const handleClick = () => {
        if(!props.exClick){
            history.push(`/explore?tag=${props.name}`)
        }
    }
    // console.log(props)
    return (
        <div className={classes.root} onClick={handleClick}>
            <div className={classes.exIcon}>{props.name ? props.name : "None"} </div> {props.exClick && <div className={classes.exIcon}><Ex onClick={() => props.exClick(props.name)} /></div> }
        </div>
    )
}


export default TagPill


