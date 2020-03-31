import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import Underline from '../Components/Underline'

import SpaceshipIcon from '../Icons/SpaceshipIcon'
import NotebookIcon from '../Icons/NotebookIcon'
import AppleIcon from '../Icons/AppleIcon'
import HomeIcon from '../Icons/HomeIcon'


const useStyles = makeStyles({
    root: {
        height: 100,
        width: 300,
        display: "flex",
        align: "bottom",
        float: props => props.align,
    }
});

export default function Dock(props){
    const classes = useStyles(props)  
    const [selected, setSelected] = useState(0)

    const clickHandler = (index) => {
        setSelected(index)
    }

return(
    <div className={classes.root + " dock-second-position"} clickHandler={clickHandler}>
        <AppleIcon clickHandler={clickHandler} index={3} selected={selected}/>
        <SpaceshipIcon clickHandler={clickHandler} index={2} selected={selected}/>
        <NotebookIcon clickHandler={clickHandler} index={1} selected={selected}/>
        <HomeIcon clickHandler={clickHandler} index={0} selected={selected}/>
        <Underline position={selected} />
    </div>
)




}