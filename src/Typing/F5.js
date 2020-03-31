import React from 'react'
import { makeStyles} from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        fontSize: "20px",
        fontFamily: "font-family: 'Roboto', sans-serif"
    }

});

export default function F5(props){
    const classes = useStyles(props)


    return(
        <div className={classes.root}>
            {props.children}
        </div>
    )
}