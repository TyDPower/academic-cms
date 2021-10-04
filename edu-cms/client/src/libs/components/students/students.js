import React, { useState, useEffect } from "react";
import DisplayAllStudents from './displayAllStudents'
import AddStudent from './addStudent'
import DisplayStudent from './displayStudent'

function Students() {
    const [studentID, setStudentID] = useState(null)
    const [display, setDisplay] = useState("displayAll")

    const studentDisplay = (display) => {
        if (display === "displayStudent") {
            return (
                <DisplayStudent student = { studentID }
                                display = {
                                    val => setDisplay(val)
                                }
                />
            )
        } else if (display ===  "addStudent") {
            return(
                <AddStudent 
                    display = {
                        val => setDisplay(val)
                    }
                />
            )
        }

        return(
            <>
                <DisplayAllStudents 
                    viewStudent = {
                        arr => {
                            setDisplay(arr[0])
                            setStudentID(arr[1])
                        }
                    }
                />
                <br />
                <button onClick={() => {
                    setDisplay("addStudent")
                }}  type="button" className="btn btn-primary">Add Student</button>
            </>
        )
        
    }

    return (
        <div className="App">
            {studentDisplay(display)}
        </div>
    );
}

export default Students;
