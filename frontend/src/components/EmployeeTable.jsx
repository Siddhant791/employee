import React from "react";
import "./employeeTable.css";
import {useNavigate} from "react-router-dom"

const EmployeeTable = ({ employees, setEmployees, setEditId }) => {
const navigate = useNavigate();

  const handleDelete = (empId) => {
    const newEmployees = employees.filter((emp) => {
      return emp.id !== empId;
    });
    setEmployees(newEmployees);
  };

  const handleEdit = (empId) => {
    navigate("/editEmployee");
  };

  return (
    <div className="empTable">
      <table>
        <thead>
          <tr>
            <th> Name </th>
            <th> Age </th>
            <th>Actions</th>
          </tr>
        </thead>
        {employees &&
          employees.map((emp) => {
            return (
              <tbody key={emp.id}>
                <tr>
                  <td>{emp.firstName + " " + emp.lastName}</td>
                  <td>{emp.age}</td>
                  <td>
                    <>
                      <button onClick={() => handleEdit(emp.id)}>Edit</button>{" "}
                      &nbsp;
                      <button onClick={() => handleDelete(emp.id)}>
                        Delete
                      </button>
                    </>
                  </td>
                </tr>
              </tbody>
            );
          })}
      </table>
    </div>
  );
};

export default EmployeeTable;
