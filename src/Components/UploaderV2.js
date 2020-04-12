
import { DirectUpload } from "@rails/activestorage"
import Uploader from "./Uploader"
import React, { useState } from 'react'
import ImageUploader from './ImageUploader'
import * as request from '../requests'
import { baseURL } from '../requests'

import DropzoneComponent from 'react-dropzone-component';

const UploaderV2 = () =>  {
    const [image, setImage] = useState(null)

    // const handleSubmit = event => {
    //     event.preventDefault();
    //     const formRecipeData = new FormData(event.target);

    //     if (image !== null) {
            
    //     }
    //     formRecipeData.append('image', image);
    //     console.log(image)
    //     console.log(formRecipeData)
    //     // this.props.submit(image);


    //     const upload = new DirectUpload(image, 'http://localhost:3000/curriculums/67/image')
    //     // let blob = new Blob(e.target.uploadFile)

    //     upload.create((error, blob) => {
    //         console.log("in create")
    //         if (error) {
    //             console.log("error", error)
    //         } else {
    //             // Add an appropriately-named hidden input to the form with a
    //             //  value of blob.signed_id so that the blob ids will be
    //             //  transmitted in the normal upload flow
    //             console.log("no error", blob)
    //             const hiddenField = document.createElement('input')
    //             hiddenField.setAttribute("type", "hidden");
    //             hiddenField.setAttribute("value", blob.signed_id);
    //             hiddenField.name = image.name
    //             document.querySelector('form').appendChild(hiddenField)
    //         }
    //     })
    // }
    const handleSubmit = event => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("file", image);

        // configure your fetch url appropriately
        fetch(`${baseURL}/curriculums/67/image`, {
            method: "PATCH",
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            });
    }


    const selectImage = newImage => setImage(newImage);

    const unselectImage = () => setImage('');



    return (
        <div>
                <form onSubmit={handleSubmit} id="form" direct_upload={true}>
                <ImageUploader
                    image={image}
                    selectImage={selectImage}
                    unselectImage={unselectImage} />
                    <button >Test</button>
                </form>
        </div>
    )

}


export default UploaderV2
