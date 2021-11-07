import React from "react";
import Students from "./libs/components/students/students";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngry } from "@fortawesome/free-solid-svg-icons"
import FileUpload from "./libs/components/misc/fileUpload"

function App() {

  return (
    <div className="container mt-4">
      <h4 className="display-4 text-center mb-4">
        <FontAwesomeIcon icon = { faAngry } /> Angry Upload
        <FileUpload />
      </h4>
    </div>
  )

}

export default App;

//<Students />