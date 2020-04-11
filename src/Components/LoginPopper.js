import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles({
    root: {
        position: "fixed",
        top: 20,
        left: "40%",
        width: "20%",
        height: 80,
        backgroundColor: "#ED3466",
        zIndex: 5,
        borderRadius: 10,
        boxShadow: "00px 0px 10px 10px #888888",
        opacity: ".9",
        textAlign: "center",
        verticalAlign: "center",
        padding: 3,
        color: "white"
    },
    button: {
        margin: 10,
        padding: 6,
        color: "white",
        backgroundColor: "#00B79D",
        borderRadius: "2px",
        fontSize: 16,
        cursor: "pointer",
        outline: "none"
    }
})
const LoginPopper = props => {
    const classes = useStyles(props)
    const [popped, setPopped] = useState(false)
    const history = useHistory()



    return (
        <div className={classes.root}>
            <div>To experience all features:</div>
            <button className={classes.button} onClick={() => history.push('/login')}>Login</button>
            <button className={classes.button} onClick={() => history.push('/signup')}>Signup</button>
            <button className={classes.button}>Logout</button>
        </div>)
}

export default LoginPopper