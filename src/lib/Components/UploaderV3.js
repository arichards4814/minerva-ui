
import { DirectUpload } from "@rails/activestorage"
import Uploader from "./Uploader"
import React, { useEffect } from 'react'
import ActiveStorageProvider from 'react-activestorage-provider'

const UploaderV3 = (props) =>  {
    
    return (
        <ActiveStorageProvider
            endpoint={{
                path: '/curriculums/67/image',
                model: 'Curriculum',
                attribute: 'image',
                method: 'POST',
            }}
            origin={{host: 'localhost', port: '3000', protocol: "HTTP"}}
            directUploadsPath='curriculums/67/image'
            onSubmit={user => this.setState({ avatar: user.avatar })}
            render={({ handleUpload, uploads, ready }) => (
                <div>
                    <input
                        type="file"
                        disabled={!ready}
                        onChange={e => handleUpload(e.currentTarget.files)}
                    />

                    {uploads.map(upload => {
                        switch (upload.state) {
                            case 'waiting':
                                return <p key={upload.id}>Waiting to upload {upload.file.name}</p>
                            case 'uploading':
                                return (
                                    <p key={upload.id}>
                                        Uploading {upload.file.name}: {upload.progress}%
                                    </p>
                                )
                            case 'error':
                                return (
                                    <p key={upload.id}>
                                        Error uploading {upload.file.name}: {upload.error}
                                    </p>
                                )
                            case 'finished':
                                return (
                                    <p key={upload.id}>Finished uploading {upload.file.name}</p>
                                )
                        }
                    })}
                </div>
            )}
        />
    )

}


export default UploaderV3
