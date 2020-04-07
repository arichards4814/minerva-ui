import React, { useState } from 'react'
import "../Button.scss"

import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles({
    root: {
        height: props =>{
            if(props.height){
                return props.height
            } else {
                return 40
            }
        }
    }
})

export default function Button(props){
    const classes = useStyles(props)

    const [rippling, setRippling] = useState(false)


    const clickHandler = () => {
        if (props.onClick){
            props.onClick()
        }
            
        console.log(rippling)
        setRippling(true)
        setTimeout(function () { setRippling(false) }, 1000);
    }
    
    
    return(
        <div>
            <button className={classes.root + " minerva-button js-ripple"} onClick={clickHandler}>
                <div className={rippling ? "c-ripple js-ripple  is-active" : "c-ripple js-ripple"}>
                    <span className="c-ripple__circle" ></span>
                </div>{props.children}</button>
        </div>
    )
}