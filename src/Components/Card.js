import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from './Button'
import F4 from '../Typing/F4'


const useStyles = makeStyles({
    root: {
        // borderStyle: "solid",
        width: 300,
        height: 325,
        borderRadius: 10,
        // borderWidth: 2,
        boxShadow: "2px 4px 6px #888888"
    },
    cardHeader: {
        height: "2%"
    },
    cardImage: {
        height: "50%",
        backgroundColor: "gray"
    },
    cardTitle: {
        height: "12%"
    },
    cardBody: {
        height: "21%",
        backgroundColor: "gray"
    },
    cardFooter: {
        marginTop: 2,
        textAlign: "center",
        height: "14%"
    },
});

export default function Card(props){
    const classes = useStyles()
    //hmm, how big should a card be? Should I have sm, md, lg? 


    return(
        <div className={classes.root}>
            <div className={classes.cardHeader}>

            </div>
            <div className={classes.cardImage}>
                {/* Image props.image */}
            </div>
            <div className={classes.cardTitle}>
                {/* Title props.title */}
            </div>
            <div className={classes.cardBody}>
                {/* Body props.body */}
            </div>
            <div className={classes.cardFooter}>
                <Button value="View"><F4 color="black" >View</F4></Button>
            </div>
        </div>
    )
}