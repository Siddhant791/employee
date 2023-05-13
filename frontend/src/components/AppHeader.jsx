import React from "react";
import "../components/AppHeader.css"
import {useNavigate} from "react-router-dom";

const AppHeader = ({setIsCreateNew}) => {

  const navigate = useNavigate();

  const handleNew = () => {
    setIsCreateNew(true);
    navigate("/createEmployee");
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