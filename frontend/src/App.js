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
        const response = await fetch("http://localhost:9000/api/employees");
        const data = await response.json();
        setEmployees(data);
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
        <>
          <AppHeader setIsCreateNew={setIsCreateNew} />
          <EmployeeTable
            employees={employees}
            fetchData={() => fetchData}
            isCreateNew={isCreateNew}
            setIsCreateNew={setIsCreateNew}
            setEditId={setEditId}
          />
        </>
      )}
    </div>
  );
}

export default App;
