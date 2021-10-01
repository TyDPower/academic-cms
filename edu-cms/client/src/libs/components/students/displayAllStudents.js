import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function DisplayAllStudents() {
  const [students, setStudents] = useState(null);

  useEffect(() => {
    async function findAllStudents() {
        try {
            const result = await fetch(`http://localhost:5000/students/findAllStudents`)
            const students = await result.json();
            console.log(students);
            setStudents(students);
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
          </div>
        );
      })}
    </>
  );
}

export default DisplayAllStudents;
