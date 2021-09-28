import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// class EmployeeDetails extends React.Component {
//   constructor() {
//     super();
//     this.state = { counter: 0, message: "" };
//   }

//   handleClick = () => {
//     this.setState({ counter: this.state.counter + 1 });
//   };
//   countCharacters = (text) => {
//     this.setState({ message: text.length });
//   };
//   render() {
//     return (
//       <div>
//         <h1>Welcome to Employee Component</h1>
//         <button onClick={this.handleClick}>Add Employee</button>
//         <p>Add Employee Button is Clicked: {this.state.counter} times</p>
//         <p>Enter Message:</p>
//         <input
//           type="text"
//           onChange={(e) => this.countCharacters(e.target.value)}
//         ></input>
//         <p>Message has {this.state.message} number of characters</p>
//       </div>
//     );
//   }
// }

// const element = <EmployeeDetails></EmployeeDetails>;

// ReactDOM.render(element, document.getElementById("root"));

//Passing data fron one comp to another using callbacks

class EmployeeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updatedSalary: null,
    };
  }
  getUpdatedSalary = (salary) => {
    this.setState({
      updatedSalary: salary,
    });
  };
  render() {
    return (
      <div>
        <h1>Employee Componenet</h1>
        <p>
          <label>Id: </label>
          {this.props.id}
        </p>
        <p>
          <label>Name: </label>
          {this.props.name}
        </p>
        <p>
          <label>Location: </label>
          {this.props.location}
        </p>
        <p>
          <label>Total Salary: </label>
          {parseInt(this.props.basicsalary) +
            parseInt(this.props.hra) +
            parseInt(this.props.specialallowance)}
        </p>
        <p>
          <label>Updated Total Salary: </label>
          {this.state.updatedSalary}
        </p>
        <SalaryComponent
          basicsalary={this.props.basicsalary}
          hra={this.props.hra}
          specialallowance={this.props.specialallowance}
          onSalaryChange={this.getUpdatedSalary}
        ></SalaryComponent>
      </div>
    );
  }
}
class SalaryComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      basicsalary: this.props.basicsalary,
      hra: this.props.hra,
      specialallowance: this.props.specialallowance,
    };
  }
  updateSalary() {
    let salary =
      parseInt(document.querySelector("#basic").value) +
      parseInt(document.querySelector("#hra").value) +
      parseInt(document.querySelector("#sa").value);

    this.props.onSalaryChange(salary);
  }
  render() {
    return (
      <div>
        <h1>Salary Componenet</h1>
        <p>
          <label>Basic Salary: </label>
          <input
            type="text"
            id="basic"
            defaultValue={this.props.basicsalary}
          ></input>
        </p>
        <p>
          <label>HRA: </label>
          <input type="text" id="hra" defaultValue={this.props.hra}></input>
        </p>
        <p>
          <label>Special Allowance: </label>
          <input
            type="text"
            id="sa"
            defaultValue={this.props.specialallowance}
          ></input>
        </p>
        <button onClick={this.updateSalary.bind(this)}>Update</button>
      </div>
    );
  }
}
const element = (
  <EmployeeComponent
    id="101"
    name="Sneha Pant"
    location="UK"
    totalsalary=" "
    basicsalary="200"
    hra="100"
    specialallowance="300"
  ></EmployeeComponent>
);

ReactDOM.render(element, document.getElementById("root"));
