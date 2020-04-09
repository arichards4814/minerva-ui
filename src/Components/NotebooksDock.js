import React from 'react'
import { makeStyles } from '@material-ui/core'
import LeftBackUnaltered from '../Icons/leftBackUnaltered'




const useStyles = makeStyles({
    root:{
        height: 70,
        // borderStyle: "solid"
    }
})


const NotebooksDock = props => {
    const classes = useStyles(props)


    console.log(props)

    return(
        <div className={classes.root}>
            Notebook: {props.notebook.title}
            <LeftBackUnaltered theme="third" /><LeftBackUnaltered pointing="right" theme="third" />
        </div>
    )
}

export default NotebooksDock