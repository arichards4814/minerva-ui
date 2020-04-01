import React from 'react'
import { makeStyles} from '@material-ui/core'

const useStyles = makeStyles({
    root:{
        width: props => { return `${props.width * 8.3}%`},
        // backgroundColor: "blue" ,
        display: "inline-block",
        wordWrap: "break-word"
    }
});

export default function Layout(props){
    const classes = useStyles(props)


return(
    <div className={classes.root}>
        {props.children}
    </div>
)

}