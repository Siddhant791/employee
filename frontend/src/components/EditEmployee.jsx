import React from "react";
import { useState } from "react";
import "./createEmployee.css";
import {useNavigate} from "react-router-dom";

const EditEmployee = () => {
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newAge, setNewAge] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    // const newEmployees = employees.map((emp) => {
    //   if (emp.id === editId)
    //     return {
    //       ...emp,
    //       firstName: newFirstName,
    //       lastName: newLastName,
    //       age: newAge,
    //     };
    //   return emp;
    // });
    // setEmployees(newEmployees);
    navigate(-1);
  };

  const handleCancel = () => {
    navigate(-1)
  };

  return (
    <div className="createEmp">
      <label>Enter Name: </label>&nbsp;
      <input
        type="text"
        value={newFirstName}
        onChange={(e) => setNewFirstName(e.target.value)}
      />{" "}
      &nbsp;
      <label>Enter Last Name: </label>&nbsp;
      <input
        type="text"
        value={newLastName}
        onChange={(e) => setNewLastName(e.target.value)}
      />{" "}
      <br />
      <label>Enter Age: </label>&nbsp;
      <input
        type="text"
        value={newAge}
        onChange={(e) => setNewAge(e.target.value)}
      />{" "}
      <br />
      <button onClick={handleSubmit} disabled={!(newFirstName && newLastName && newAge) }>Save</button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
};

export default EditEmployee;
