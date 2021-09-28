import React from "react";
import ReactDOM from "react-dom";

const employeeContext = React.createContext({
  data: " ",
  changeEmployeeInfo: () => {},
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        Id: 10001,
        Name: "Sneha",
        Location: "UK",
        Salary: 700000,
      },
      changeEmployeeInfo: this.updateEmployeeData,
    };
  }

  updateEmployeeData = () => {
    this.setState({ data: { Id: 100002 } });
  };

  render() {
    return (
      <div>
        <h2>App Component</h2>
        <br />
        <p>
          <label>Employee Id:</label>
          {this.state.data.Id}
        </p>
        <employeeContext.Provider value={this.state}>
          <Employee />
        </employeeContext.Provider>
        {/* <p>
          <button onClick={this.updateEmployeeData}>Update</button>
        </p> */}
      </div>
    );
  }
}
class Employee extends React.Component {
  static contextType = employeeContext;

  render() {
    return (
      <div>
        <h2>Employee Component</h2>
        <br />
        <p>
          <label>Employee Id:</label>
          {this.context.data.Id}
        </p>
        <Salary />
      </div>
    );
  }
}
class Salary extends React.Component {
  static contextType = employeeContext;
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <h2>Salary Component</h2>
        <br />
        <p>
          <label>Employee Id:</label>
          {this.context.data.Id}
        </p>
        <p>
          <button onClick={this.context.changeEmployeeInfo}>Update</button>
        </p>
      </div>
    );
  }
}

const element = <App></App>;

ReactDOM.render(element, document.getElementById("root"));
