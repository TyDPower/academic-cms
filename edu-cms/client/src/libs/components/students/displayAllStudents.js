import React, { useState, useEffect } from "react";
import { StudentUtils } from "../../utils/students";

const studentUtils = new StudentUtils();

function DisplayAllStudents(props) {
  const [students, setStudents] = useState(null);

  useEffect(() => {
    studentUtils.findAllStudents()
    .then(studentList => setStudents(studentList))
    .catch(err => console.error(err));
  }, [])

  return (
    <>
      { students?.map( student => {
        return (
          <div key={student._id}>
            <br />
            <h1>{student.lastName}</h1>
            <h2>{student._id}</h2>
            <h2>{student.age}</h2>
            <h3>{student.enrollment.dateEnrolled}</h3>
            <br />
            <button
              onClick={() => {
                props.viewStudent(["displayStudent", student._id])
              }}
              type="button" className="btn btn-outline-primary">
              View {student.lastName}
            </button>
          </div>
        );
      })}
    </>
  );
}

export default DisplayAllStudents;
