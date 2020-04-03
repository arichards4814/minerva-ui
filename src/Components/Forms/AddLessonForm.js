import React, { useState } from 'react'
import MinervaInput from './MinervaInput'
import { makeStyles } from '@material-ui/core'
import F4 from '../../Typing/F4'
import ContentCard from '../ContentCard'
import MajesticButton from '../MajesticButton'

const useStyles = makeStyles({
    root: {
        backgroundColor: "gray"
    }
})
export default function AddLessonForm(props) {
    const classes = useStyles(props)
    const [videoURL, setVideoURL] = useState("")
    
    const urlListener = (e) => {
        console.log(e.target.value)
        setVideoURL(e.target.value)
    }


    return(
        <div>
            <F4 font="secondary">Lesson Title:</F4><MinervaInput theme="minerva"/>
            <F4 font="secondary">Media Url:</F4><MinervaInput theme="secondary" width={400} onChange={urlListener}/>
            <F4 font="secondary">Content Preview:</F4>
            <ContentCard videoURL={videoURL}/>
           
            <F4 font="secondary">Description:</F4><MinervaInput theme="third" width={400}/>
            <MajesticButton color="third">Create</MajesticButton>
        </div>
    )
}