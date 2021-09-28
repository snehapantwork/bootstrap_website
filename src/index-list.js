import React from "react";
import ReactDOM from "react-dom";

function Employee(props) {
  return (
    <div style={{ border: "2px solid black" }}>
      <p>
        <label>
          EMployee ID: <b>{props.data.id}</b>
        </label>
      </p>
      <p>
        <label>
          EMployee Name: <b>{props.data.Name}</b>
        </label>
      </p>
      <p>
        <label>
          EMployee Location: <b>{props.data.Location}</b>
        </label>
      </p>
      <p>
        <label>
          EMployee Salary: <b>{props.data.Salary}</b>
        </label>
      </p>
    </div>
  );
}

function DisplayEmployees(props) {
  const empList = props.employeeList;
  const listElements = empList.map((emp) => (
    <Employee key={emp.id} data={emp}></Employee>
  ));
  return <div>{listElements}</div>;
}
const employees = [
  { id: 101, Name: "Sneha", Location: "UK", Salary: 70000 },
  { id: 102, Name: "Bhoomi", Location: "UK", Salary: 90000 },
  { id: 103, Name: "Mukesh", Location: "UK", Salary: 100000 },
];

const element = <DisplayEmployees employeeList={employees} />;
ReactDOM.render(element, document.getElementById("root"));
