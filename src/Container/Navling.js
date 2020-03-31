import React from 'react'
import { makeStyles } from '@material-ui/core'
import Dock from './Dock.js'
import logo from '../SVGs/logo.svg'
import LogoHolder from '../Components/LogoHolder.js'
import bottomLine from '../SVGs/bottom_line.svg'
import LoadingAnimation from '../Components/LoadingAnimation.js'


const useStyles = makeStyles({
    root: {
        height: 120,
        width: "100%",
        position: "sticky",
        top: 0,
        backgroundColor: "white",
        zIndex: 1
    }
});

//i want to be able to pass down float right to dock.

export default function Navling(props){
    const classes = useStyles(props)

    return(
        <div className={classes.root}>
            <LogoHolder image={logo} />
            <Dock align="right"/>
            <img src={bottomLine} ></img>
        </div>
    )
}