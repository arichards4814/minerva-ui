import React from 'react'
import { makeStyles } from '@material-ui/core' 
import CustomImage from '../Components/CustomImage'
import F3 from '../Typing/F3'
import F4 from '../Typing/F4'
import F5 from '../Typing/F5'
import F6 from '../Typing/F6'
import Button from '../Components/Button'
import VideoIcon from '../Icons/VideoIcon'
import BlogIcon from '../Icons/BlogIcon'
import BookIcon from '../Icons/BookIcon'

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
        textAlign: "center",
        height: 100
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
                    <F5>{props.description}</F5>
                </div>
                <div className={classes.footer} >
                    {/* {props.title && <Button theme={"third"}onClick={props.onClick}>Start Lesson</Button>} */}
                    <F6>Subscribe to this Curriculum to view this Lesson</F6>
                    {props.lesson_type && props.lesson_type === "video" || props.lesson_type === "Video" && <VideoIcon />}
                    {props.lesson_type && props.lesson_type === "blog" || props.lesson_type === "Blog" && <BlogIcon />}
                    {props.lesson_type && props.lesson_type === "book" || props.lesson_type === "Book" && <BookIcon />}
                </div>
            </div>
        </div>
    )
}


export default Display