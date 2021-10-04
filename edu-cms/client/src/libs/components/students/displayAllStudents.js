import React, { useState, useEffect } from "react";

function DisplayAllStudents(props) {
  const [students, setStudents] = useState(null);

  useEffect(() => {
    async function findAllStudents() {
        try {
            const result = await fetch(`http://localhost:5000/students/findAllStudents`)
            const resultData = await result.json();
            setStudents(resultData);
        } catch (err) {
            console.error(err);
        }
      
    };
    findAllStudents();   
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
