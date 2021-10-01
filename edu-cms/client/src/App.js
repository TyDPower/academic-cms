import React, { useState, useEffect } from "react";
import './libs/css/App.css';
import DisplayAllStudents from './libs/components/students/displayAllStudents'

function App() {
  const [studentID, setStudentID] = useState(null)

  useEffect(() => {
    console.log(studentID)
  }, [studentID])

  const display = () => {
    if (!studentID) {
      return(
        <>
          <DisplayAllStudents 
            viewStudent={
              studentID => setStudentID(studentID)
            }/>
        </>
      )
    }

    return (
      <>
        <h1>{studentID}</h1>
        <button
          onClick={() => {
            setStudentID(null)
          }}
          type="button" className="btn btn-outline-primary">
          View Student
        </button>
      </>
    )
    
  }

  return (
    <div className="App">
      {display()}
    </div>
  );
}

export default App;
