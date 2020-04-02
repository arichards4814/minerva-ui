import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import "../MajesticButton.scss"


const useStyles = makeStyles({
    root: {
        width: 360
    }
})
export default function MajesticButton(props) {

    const [rippling, setRippling] = useState(false)
    const classes = useStyles(props)


    const clickHandler = () => {
        if (props.onClick) {
            props.onClick()
        }

        setRippling(true)
        setTimeout(function () { setRippling(false) }, 1000);
    }


    return (
        <div>
            <button className={classes.root + " majestic-button minerva-button js-ripple"} onClick={clickHandler}>
                <div className={rippling ? "c-ripple js-ripple  is-active" : "c-ripple js-ripple"}>
                    <span className="c-ripple__circle" ></span>
                </div>{props.children}</button>
        </div>
    )
}