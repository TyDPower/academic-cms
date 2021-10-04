import React, { useState, useEffect } from "react";

function DisplayStudent(props) {
  const [studentID, setStudentID] = useState(props.student);
  const [student, setStudent] = useState();

    useEffect(() => {
        async function findStudent() {
            try {
                const result = await fetch(`http://localhost:5000/students/findStudent/${studentID}`);
                const resultData = await result.json();
                setStudent(resultData)
            } catch (err) {
                console.error(err);
            }
        };
        findStudent()
    }, [])

  return (
      <>
        {student?.map(student => {
            return(
                <div key = { student._id }>
                <h1>{student._id}</h1>
                <h1>{student.lastName}</h1>
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
