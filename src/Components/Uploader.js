import React, { useState } from 'react'
import Button from './Button'
import * as requests from '../requests.js'


const Uploader = props => {
const [file, setFile] = useState({})
  
const onChange = (e) => {
    setFile({
        uri: e.target.value,
        name: e.target.files[0].name,
        type: e.target.files[0].type
    })
}

const onSubmit = () => {
    console.log(file)
    
    let imageURI = file.uri
    let formdata = new FormData();

    formdata.append("image", { uri: imageURI, name: `${file.name}`, type: `${file.type}` })

    requests.postImageToCurriculum(66, formdata)
}
    return(
        <div>
            Upload Photo
            <input onChange={onChange} type="file" accept="image/png, image/jpeg"></input>
            <Button onClick={onSubmit} theme="secondary" color="white">Upload</Button>
        </div>
    )
}

export default Uploader