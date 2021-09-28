import React, { useState } from "react";
import ReactDOM from "react-dom";

class Employee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
    };
  }
  changeName = (e) => {
    this.setState({ Name: e.target.value });
  };
  render() {
    return (
      <div>
        <h2>Welcome to Employee Componenet</h2>
        <p>
          <label>
            Employee Name:
            <input
              type="text"
              value={this.state.Name}
              onChange={this.changeName}
            ></input>
          </label>
        </p>
        <p>
          Entered Name is: <b>{this.state.Name}</b>
        </p>
      </div>
    );
  }
}

function NewEmployee() {
  // const [name, setName] = useState();
  // const [location, setLocation] = useState();

  const [employee, setEmployeeData] = useState({
    Id: "",
    Name: "",
    Location: "",
    Salary: "",
  });

  // function changeName(e) {
  //   setName(e.target.value);
  // }
  // function changeLocation(e) {
  //   setLocation(e.target.value);
  // }
  function changeEmployeeInfo(e) {
    setEmployeeData({ ...employee, [e.target.name]: e.target.value });
  }
  return (
    <div>
      <h2>Welcome to Employee Function Componenet</h2>
      <p>
        <label>
          Employee Id:
          <input
            type="text"
            value={employee.Id}
            name="Id"
            onChange={changeEmployeeInfo}
          ></input>
        </label>
      </p>
      <p>
        <label>
          Employee Name:
          <input
            type="text"
            value={employee.Name}
            name="Name"
            onChange={changeEmployeeInfo}
          ></input>
        </label>
      </p>
      <p>
        <label>Employee Location:</label>
        <input
          type="text"
          value={employee.Location}
          name="Location"
          onChange={changeEmployeeInfo}
        ></input>
      </p>

      <p>
        <label>
          Employee Salary:
          <input
            type="text"
            name="Salary"
            value={employee.Salary}
            onChange={changeEmployeeInfo}
          ></input>
        </label>
      </p>
      <p>
        Employee Id: <b>{employee.Id}</b>
        Employee Name:<b>{employee.Name}</b>
        Employee Location <b>{employee.Location}</b>
        Employee Salary<b>{employee.Salary}</b>
      </p>
      <SalaryComponent
        salary={employee.Salary}
        onSalaryChange={changeEmployeeInfo}
      />
    </div>
  );
}

const SalaryComponent = ({ onSalaryChange, salary }) => {
  return (
    <div>
      <h2>Salary Componenet</h2>
      <p>
        <label>
          Employee Salary:
          <input
            type="text"
            name="Salary"
            value={salary}
            onChange={onSalaryChange}
          ></input>
        </label>
      </p>
    </div>
  );
};
const element = <NewEmployee />;
ReactDOM.render(element, document.getElementById("root"));
