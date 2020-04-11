
import { DirectUpload } from "@rails/activestorage"
import Uploader from "./Uploader"
import React, { useEffect } from 'react'

const UploaderV2 = () =>  {
    

    const onChange = (e) => {
        const input = document.getElementById("input")
        // const url = e.target.dataset.directUploadUrl
        const upload = new DirectUpload(e.target.files[0], 'http://localhost:3000/curriculums/67/image')
        
        upload.create((error, blob) => {
            if (error) {
                // Handle the error
                console.log("error", error)
            } else {
                console.log("got to blob")
                // Add an appropriately-named hidden input to the form with a
                //  value of blob.signed_id so that the blob ids will be
                //  transmitted in the normal upload flow
                const hiddenField = document.createElement('input')
                hiddenField.setAttribute("type", "hidden");
                hiddenField.setAttribute("value", blob.signed_id);
                hiddenField.name = input.name
                document.querySelector('form').appendChild(hiddenField)
            }
        })
        console.log(upload)
    }

    // upload(file) {
    //     this.upload.create((error, blob) => {
    //         if (error) {
    //             // Handle the error
    //         } else {
    //             // Add an appropriately-named hidden input to the form
    //             // with a value of blob.signed_id\
    //         }
    //     })
    // }

    // directUploadWillStoreFileWithXHR(request) {
    //     request.upload.addEventListener("progress",
    //         event => this.directUploadDidProgress(event))
    // }

    // directUploadDidProgress(event) {
    //     // Use event.loaded and event.total to update the progress bar
    // }

    return (
        <div>
            <form>
                <input id="input" type="file" onChange={onChange} data-directUploadUrl={true} accept="image/png, image/jpeg"></input>
            </form>
            <button >Test</button>
        </div>
    )

}


export default UploaderV2
