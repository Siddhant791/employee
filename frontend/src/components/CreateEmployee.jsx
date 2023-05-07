import { useState } from "react";
import "./createEmployee.css";

const CreateEmployee = ({ employees, setEmployees, setIsCreateNew }) => {
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newAge, setNewAge] = useState("");

  const handleSubmit = () => {
    const newId =
      employees.length > 0 ? employees[employees.length - 1].id + 1 : 0;
    setEmployees([
      ...employees,
      {
        id: newId,
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge,
      },
    ]);
    setIsCreateNew(false);
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
      <button onClick={() => setIsCreateNew(false)}>Cancel</button>
    </div>
  );
};

export default CreateEmployee;
