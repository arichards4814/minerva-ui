import React from 'react'
import { makeStyles } from '@material-ui/core' 
import CustomImage from '../Components/CustomImage'
import F3 from '../Typing/F3'
import F4 from '../Typing/F4'
import Button from '../Components/Button'

const useStyles = makeStyles({
    root: {
        height: 800,
    },
    debug:{
        height:800,
        borderStyle: "solid"
    },
    previewInfo: {
        height: 300,
        margin: 10,
        borderStyle: "solid",
        borderRadius: "14px",
        padding: 10
    },
    body: {
        height: "80%"
    }  ,
    footer: {
        textAlign: "center"
    }    
})

const Display = props => {
    const classes = useStyles(props)
    return(
        <div className={props.debug ? classes.debug : classes.root}>
            <CustomImage src={props.image_url} height={props.imgHeight} width={props.imgWidth} />
           
            {/* button */}
            <div className={classes.previewInfo}>
                <div className={classes.body}>
                    <F3 font="secondary">Lesson Preview:</F3>
                    <F3>{props.title}</F3>
                    <F4>{props.description}</F4>
                </div>
                <div className={classes.footer} >
                    {props.title && <Button theme={"third"}onClick={props.onClick}>Start Lesson</Button>}
                </div>
            </div>
        </div>
    )
}


export default Display