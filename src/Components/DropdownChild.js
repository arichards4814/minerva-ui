import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import TinyPlus from '../Icons/Tiny/TinyPlus'
import TinyNotebook from '../Icons/Tiny/TinyNotebook'
import { useHistory } from 'react-router-dom'


const useStyles = makeStyles({
    root: {
        width: props => {
            if (props.width) {
                return props.width
            } else {
                return 150
            }
        },
        height: props => {
            if (props.height) {
                return props.height
            } else {
                return 50
            }
        },
        borderStyle: 'solid',
        borderRadius: '8px',
        position: "relative",
        display: "inline-block",
        marginTop: 3,
        marginBottom: 3,
        padding: 10
    },
    icon: {
        position: "absolute",
        right: 0,
        width: 30,
        top: "15%"
    },
    notebook: {
        width: props => {
            if (props.secondwidth) {
                return props.secondwidth
            } else {
                return 150
            }
        },
        height: props => {
            if (props.secondheight) {
                return props.secondheight
            } else {
                return 50
            }
        },
        borderStyle: 'solid',
        borderRadius: '8px',
        position: "relative",
        display: "inline-block",
        marginLeft: 3,
        verticalAlign: "top",
        marginTop: 3,
        marginBottom: 3,
        padding: 10
    },
    input:{
        width: "80%",
        display: "inline-block"
    }
})

const DropdownChild = props => {
    const classes = useStyles(props)
    const history = useHistory()
    const [editing, setEditing] = useState(false)
    const [notebookName, setNotebookName] = useState("")

    console.log("in dropdown child", props)

    const openEdit = () => {
        setEditing(true)
    }

    const createNotebook = () => {
        console.log(notebookName)
        console.log("here are the props", props)
        // the data for the notebook itself will just be a title, user_id, //is material_id necessary here?
        //here will make a post & create the lessonnotebooks joiner
        //lesson_id: props.id
        //notebook_id: (get from the return of posting the notebook)
        //do this all in one special request probably
    }

    const handleChange = (e) => {
        setNotebookName(e.target.value)
    }


    //onclick of the tiny plus it will show an input with a plus icon.
    //onclick of that plus icon a new notebook will be created.

    return (
        <div className={classes.all}>
            <div className={classes.root}>
                {props.title}
                <div className={classes.icon}>
                    {props.notebooks && props.notebooks.length < 1 && !editing && <TinyPlus theme="minerva" onClick={openEdit} cursor={"pointer"}/>}
                </div>
            </div>
            {editing && <div className={classes.notebook}>
                    <input className={classes.input} value={notebookName} onChange={handleChange}></input>
                        <div className={classes.icon}>
                            <TinyPlus theme="minerva" onClick={createNotebook} cursor={"pointer"} />
                        </div>
            </div>}
            {props.notebooks && props.notebooks.length > 0 &&
            <div className={classes.notebook}>
                {props.notebooks[0].title}
                <div className={classes.icon} style={{marginBottom: 10}}>
                    <TinyNotebook size={1.5} onClick={() => history.push(`/notebooks/${props.notebooks[0].id}`)}/>
                </div>
            </div>}
        </div>
    )
}

export default DropdownChild