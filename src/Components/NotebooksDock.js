import React from 'react'
import { makeStyles } from '@material-ui/core'




const useStyles = makeStyles({
    root:{
        height: 70,
        borderStyle: "solid"
    }
})

const NotebooksDock = props => {
    const classes = useStyles(props)

    return(
        <div className={classes.root}>
            Notebook: {props.notebook.title}
        </div>
    )
}

export default NotebooksDock