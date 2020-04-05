import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core'
import AxiosSearch from '../Youtube/AxiosSearch'
import LoadingAnimation from './LoadingAnimation'
import F5 from '../Typing/F5'
import F6 from '../Typing/F6'
import { getYoutubeIDFromURL } from '../requests'

//////This is only for previews. When it's actually in there it will
///the purpose of this content card is to load up information
///from a passed in youtube url
/// or if there is no youtube url poplulate it with something else
const useStyles = makeStyles({
    root: {
        width: 550,
        height: 150,
        borderRadius: 20,
        borderStyle: "solid"
    },
    row:{
        display: "table",
        width: "100%"
    },
    image:{
        display: "table-cell",
        paddingLeft: 10
    },
    leftMargin:{
        display: "table-cell",
        verticalAlign: "top",
        paddingLeft: 10
        
    },
    body:{
        height: 100,
        paddingLeft: 10
    }
})

export default function ContentCard(props){
    const classes = useStyles(props)
    const [videoInfo, setVideoInfo] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() =>{
        // if(props.videoid){
        //     handleSearch(props.videoid)
        // }
        if(props.videoURL){
            handleSearch(getYoutubeIDFromURL(props.videoURL))
        }
        
    },[props.videoURL])

    const handleSearch = async (youtubeid) => {
        const response = await AxiosSearch.get('/search', {
            params: {
                q: youtubeid,
                part: "snippet",
                key: process.env.REACT_APP_API_KEY
            }
        })

        // 
        if (response.data.items.length > 0){
            setError("")
            setLoading(false)
            setVideoInfo(response.data.items[0].snippet)
            props.getNewLessonImage(response.data.items[0].snippet.thumbnails.medium.url)
            console.log(response.data.items[0].snippet)
        } else if (props.videoUrl){
            if(props.videoUrl.length > 0){
                setVideoInfo("")
            }

            setLoading(true)
            setError("Cannot retrieve details for this url.")
        } else {

            setLoading(true)
            setError("Cannot retrieve details for this url.")
        }
        //handle the search response here :)
    }

    if (videoInfo.thumbnails){
        console.log("medium", videoInfo.thumbnails.medium.url)
        // props.getNewLessonImage(videoInfo.thumbnails.medium.url)
    }


return(
    <div className={classes.root}> 
        <div className={classes.row}>
            <div className={classes.image}>
                {videoInfo.thumbnails && <img style={{ width: 190 }} src={videoInfo.thumbnails.high.url}></img>}
            </div>
            <div className={classes.leftMargin}>
                        {videoInfo.title && <F5>{videoInfo.title}</F5>}
                  
                    <div className={classes.body}>
                        {videoInfo.description && <F6>{videoInfo.description}</F6>}
                            {loading && <LoadingAnimation />}
                        {error != "" && <F5>{error}</F5>}
                    </div>
            </div>
        </div>
            
            
    </div>
)

}