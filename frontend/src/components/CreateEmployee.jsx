import React from "react";
import { useState } from "react";
import {useNavigate} from "react-router-dom"
import "./createEmployee.css";

const CreateEmployee = ({ employees, setEmployees, setIsCreateNew }) => {
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newAge, setNewAge] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {

    navigate(-1);
  };

  return (
    <div className="createEmp">
      <label>Enter First Name: </label>&nbsp;
      <input
        type="text"
        value={newFirstName}
        onChange={(e) => setNewFirstName(e.target.value)}
      />
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
      <button
        onClick={handleSubmit}
        disabled={!(newFirstName && newLastName && newAge) }
      >
        Submit
      </button>
      <button onClick={() => { navigate(-1); }}>Cancel</button>
    </div>
  );
};

export default CreateEmployee;
