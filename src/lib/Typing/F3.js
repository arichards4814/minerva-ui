import React from 'react'
import { makeStyles} from '@material-ui/core'
import * as Fonts from '../Schemes/Fonts'

const useStyles = makeStyles({
    root: {
        fontSize: "30px",
        fontFamily: props => Fonts.handleFonts(props),
        color: props => props.color
    }

});

export default function F3(props){
    const classes = useStyles(props)


    return(
        <div className={classes.root}>
            {props.children}
        </div>
    )
}