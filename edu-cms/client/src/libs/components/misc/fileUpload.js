import React, { useState } from 'react'
import Message from './message'

export const FileUpload = () => {

    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState("Choose file");
    const [uploadedFile, setUploadedFile] = useState({});
    const [uploadedFilePath, setUploadedFilePath] = useState();
    const [message, setMessage] = useState();

    const onSubmit = async e => {
        e.preventDefault();
        const fd = new FormData();
        fd.append("image", file)        

        try {
            const request = await fetch(`http://localhost:5000/upload`, {
                method: "POST",
                body: fd
            });
            const result = await request.json();
            setUploadedFile({
                name: result.data.name
            })

            setMessage("File Uploaded")

        } catch (e) {
            if (e) {
                setMessage("There was a problem with the server")
            } else {
                setMessage(e.response.msg)
            }
        }
    };

    return (
        <div>
            { message ? <Message msg={message} /> : null }
            <form onSubmit = {onSubmit}>
                <div class="input-group mt-4">
                    <input type="file" class="form-control" id="inputGroupFile02" 
                        onChange = {e => {
                            setFile(e.target.files[0])
                            setFileName(e.target.files[0].name)
                            setUploadedFilePath(URL.createObjectURL(e.target.files[0]))
                            }
                        }
                    />
                </div>
                { uploadedFile ? <div className="row mt-5">
                    <div className="col-md-6 m-auto">
                        <img style={{ width: "100%"}} src={uploadedFilePath} />
                    </div>
                </div> : null }
                <input type="submit" value="Upload" className="btn btn-primary btn-block mt-4" />
            </form>
            
        </div>
    )
}

export default FileUpload
