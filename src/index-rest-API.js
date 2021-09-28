import React from "react";
import ReactDOM from "react-dom";

class EmployeeComponenet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((result) => this.setState({ employees: result }));
  }
  render() {
    return (
      <div>
        <h2>Employee Deatils...</h2>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {this.state.employees.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const element = <EmployeeComponenet />;

ReactDOM.render(element, document.getElementById("root"));
