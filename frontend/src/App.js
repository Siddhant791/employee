import React from "react";
import CreateEmployee from "./components/CreateEmployee";
import EmployeeTable from "./components/EmployeeTable";
import EditEmployee from "./components/EditEmployee";
import AppHeader from "./components/AppHeader";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isCreateNew, setIsCreateNew] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/users");
        const data = await response.json();
        setEmployees(data.users);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="App">
      <>
        <AppHeader setIsCreateNew={setIsCreateNew} />
        <EmployeeTable
          employees={employees}
          setEmployees={setEmployees}
          isCreateNew={isCreateNew}
          setIsCreateNew={setIsCreateNew}
          setEditId={setEditId}
        />
      </>
    </div>
  );
}

export default App;
