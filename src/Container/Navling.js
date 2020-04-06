import React from 'react'
import { makeStyles } from '@material-ui/core'
import Dock from './Dock.js'
import logo from '../SVGs/logo.svg'
import LogoHolder from '../Components/LogoHolder.js'
import bottomLine from '../SVGs/bottom_line.svg'
import LoadingAnimation from '../Components/LoadingAnimation.js'

// redux
import { connect } from 'react-redux';


const useStyles = makeStyles({
    root: {
        height: props => {
            if(props.navlingHidden){
                return 10
            } else {
                return 120
            }
        },
        width: "100%",
        position: "sticky",
        top: 0,
        backgroundColor: "white",
        zIndex: 1
    }
});

//i want to be able to pass down float right to dock.

const Navling = props => {
    const classes = useStyles(props)

    return(
        <div className={!props.navlingHidden ? classes.root : classes.root + " navling-hidden"}>
            {!props.navlingHidden && <LogoHolder image={logo} />}
            {!props.navlingHidden && <Dock align="right"/>}
            <img src={bottomLine} ></img>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        navlingHidden: state.navlingHidden
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navling);
