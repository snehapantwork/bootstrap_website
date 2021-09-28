import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
function Employee() {
  const [employeeCount, setEmployeeCount] = useState(0);
  const [noOfDays, setNoOfDays] = useState(0);
  useEffect(() => {
    var handle = setInterval(getEmployeesCount, 5000);
    return () => {
      clearInterval(handle);
    };
  });
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((result) => setNoOfDays(result.NOOFDAYS.length));
  });
  function getEmployeesCount() {
    // alert("Getting the emnployees count");
    fetch("data.json")
      .then((res) => res.json())
      .then((res) => setEmployeeCount(res.JSONDATA.length));
  }
  function navigateToDepartment() {
    ReactDOM.render(<Department />, document.getElementById("root"));
  }
  return (
    <div>
      <h2>Welcome to Employee Comp</h2>
      <p>
        <label>
          Employee Count:<b>{employeeCount}</b>
        </label>
      </p>
      <p>
        Last Employee Added :<b>{noOfDays} days ago...</b>
      </p>
      <button onClick={navigateToDepartment}>Department</button>
    </div>
  );
}

function Department() {
  return (
    <div>
      <h2>Welcome to Departmenet Comp</h2>
    </div>
  );
}
const element = <Employee />;
ReactDOM.render(element, document.getElementById("root"));
