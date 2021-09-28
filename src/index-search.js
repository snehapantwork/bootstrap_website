import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
//import JSONDATA from './data.json';

function EmployeeComponent() {
  //current state variable and function to update the state variable
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [allEmployees, setAllEmployees] = useState([]);
  const [searchText, setSearchText] = useState("");
  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setAllEmployees(result.JSONDATA);
        setFilteredEmployees(result.JSONDATA);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    let emps = allEmployees.filter((val) => {
      if (searchText === "") {
        return val;
      } else if (val.Name.toLowerCase().includes(searchText.toLowerCase())) {
        return val;
      }
    });

    setFilteredEmployees(emps);
  }, [searchText]);

  function onSearchTextChange(e) {
    setSearchText(e.target.value);
  }

  return (
    <div>
      <h2>Employees Data...</h2>
      <p>
        <label>Search by Name:</label>
        <input
          type="text"
          value={searchText}
          onChange={onSearchTextChange}
        ></input>
      </p>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Location</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((emp) => (
            <tr key={emp.Id}>
              <td>{emp.Id}</td>
              <td>{emp.Name}</td>
              <td>{emp.Location}</td>
              <td>{emp.Salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
const element = <EmployeeComponent />;
ReactDOM.render(element, document.getElementById("root"));
