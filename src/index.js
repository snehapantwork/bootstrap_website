import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
const employeeContext = React.createContext();

function App() {
  const [employee, setEmployee] = useState({
    Id: 101,
    Name: "Bhoomi",
    Location: "Bangalore",
    Salary: 123456,
    EmploymentType: "Contract",
  });
  return (
    <div>
      <h2>Welcome to App Comp</h2>
      <p>
        <label>
          Employee Salary: <b>{employee.Salary}</b>
        </label>
      </p>
      <employeeContext.Provider
        value={{ data: employee, updateEmployee: setEmployee }}
      >
        <Employee />
      </employeeContext.Provider>
    </div>
  );
}
function Employee() {
  let context = useContext(employeeContext);

  function changeEmploymentType() {
    alert("hi");
    context.updateEmployee({ ...context.data, EmploymentType: "Permanent" });
  }
  return (
    <div>
      <h2>Welcome to Emp Comp</h2>
      <p>
        <label>
          Employee Id: <b>{context.data.Id}</b>
        </label>
      </p>
      <p>
        <label>
          Employee Name: <b>{context.data.Name}</b>
        </label>
      </p>
      <p>
        <label>
          Employee Salary: <b>{context.data.Salary}</b>
        </label>
      </p>

      <employeeContext.Consumer>
        {(value) => {
          value.data.EmploymentType === "Permanent" ? (
            <Permanent></Permanent>
          ) : (
            <Contract></Contract>
          );
        }}
      </employeeContext.Consumer>
      <button onClick={changeEmploymentType}>Make Permanent</button>
      <Salary />
    </div>
  );
}
function Salary() {
  let context = useContext(employeeContext);
  function updateSalary() {
    context.updateEmployee({ ...context.data, Salary: 150000 });
  }
  return (
    <div>
      <h2>Welcome to Salary Comp</h2>
      <p>
        <label>
          Employee Id: <b>{context.data.Id}</b>
        </label>
      </p>
      <p>
        <label>
          Employee Salary: <b>{context.data.Salary}</b>
        </label>
      </p>
      <button onClick={updateSalary}>Update</button>
    </div>
  );
}

function Permanent() {
  return (
    <div>
      <h2>Permanent Component Contents..</h2>
    </div>
  );
}
function Contract() {
  return (
    <div>
      <h2>Contract Component Contents..</h2>
    </div>
  );
}

const element = <App />;
ReactDOM.render(element, document.getElementById("root"));
