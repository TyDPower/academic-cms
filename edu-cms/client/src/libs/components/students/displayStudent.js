import React, { useState, useEffect } from "react";
import { StudentUtils } from '../../utils/students'

const studentUtils = new StudentUtils

function DisplayStudent(props) {
  const [studentID, setStudentID] = useState(props.student);
  const [student, setStudent] = useState();

    useEffect(() => {
        studentUtils.findStudent(studentID)
        .then(studentData => setStudent(studentData))
    }, [])

  return (
      <>
        {student?.map(student => {
            return(
                <div key = { student._id }>
                <h1>{student._id}</h1>
                <h1>{student.lastName}</h1>
                <h2>{student.age}</h2>
                <h3>{student.enrollment.dateEnrolled}</h3>
                <h1>Good student</h1>
                <h1>Great work</h1>
                <h1>Keep it up</h1>
                <br />
                <button
                    onClick={() => {
                        props.display("displayAll")
                    }}
                    type="button" className="btn btn-outline-primary">
                        Go Back
                </button>
            </div>
            )
        })}
      </>
  );

}

export default DisplayStudent;
