import CreateEmployee from "./components/CreateEmployee";
import EmployeeTable from "./components/EmployeeTable";
import EditEmployee from "./components/EditEmployee";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isCreateNew, setIsCreateNew] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://dummyjson.com/users");
        const data = await response.json();
        setEmployees(data.users);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    }
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
      {isCreateNew ? (
        <CreateEmployee
          employees={employees}
          setEmployees={setEmployees}
          setIsCreateNew={setIsCreateNew}
        />
      ) : editId ? (
        <EditEmployee
          employees={employees}
          setEmployees={setEmployees}
          setEditId={setEditId}
          editId={editId}
        />
      ) : (
        <EmployeeTable
          employees={employees}
          setEmployees={setEmployees}
          isCreateNew={isCreateNew}
          setIsCreateNew={setIsCreateNew}
          setEditId={setEditId}
        />
      )}
    </div>
  );
}

export default App;
