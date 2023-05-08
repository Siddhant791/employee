import "../components/AppHeader.css"

const AppHeader = ({setIsCreateNew}) => {
  const handleNew = () => {
    setIsCreateNew(true);
  };
    return (
         <div className="appHeader">
            <img height="50px" width="50px" src="././favicon.ico" alt="logo" />{" "}
            &nbsp; Manage Employees &nbsp;
            <button onClick={handleNew}>Create New Employee</button>
          </div>
             )
}

export default AppHeader;