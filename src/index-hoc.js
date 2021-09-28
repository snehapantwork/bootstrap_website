import React from "react";
import ReactDOM from "react-dom";

// class EmployeeData extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       employess: [],
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((result) => {
//         this.setState({
//           employess: result,
//         });
//       });
//   }

//   render() {
//     return (
//       <div>
//         <h2>Employee Data..</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>Id</th>
//               <th>Name</th>
//               <th>Address</th>
//               <th>Website</th>
//             </tr>
//           </thead>
//           <tbody>
//             {this.state.employess.map((emp) => (
//               <tr key={emp.id}>
//                 <td>{emp.id}</td>
//                 <td>{emp.name}</td>
//                 <td>
//                   {emp.address.street}, {emp.address.city}
//                 </td>

//                 <td>{emp.website}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }

// class CompanyData extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       dept: [],
//     };
//   }
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((result) => {
//         this.setState({
//           dept: result,
//         });
//       });
//   }
//   render() {
//     return (
//       <div>
//         <h2>Company Data..</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>Id</th>
//               <th>Company Name</th>
//               <th>catchPhrase</th>
//               <th>BS</th>
//             </tr>
//           </thead>
//           <tbody>
//             {this.state.dept.map((dept) => (
//               <tr key={dept.id}>
//                 <td>{dept.id}</td>
//                 <td>{dept.company.name}</td>
//                 <td>{dept.company.catchPhrase}</td>
//                 <td>{dept.company.bs}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }

//higher order componenet
function reportsHOC(InputComponent, inputData) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
        columns: inputData.columns,
        header: inputData.header,
      };
    }
    componentDidMount() {
      fetch(inputData.url)
        .then((res) => res.json())
        .then((result) => {
          this.setState({
            data: result,
          });
        });
    }
    render() {
      return <Data data={this.state}></Data>;
    }
  };
}

class Data extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h2>{this.props.data.header}..</h2>
        <table>
          <thead>
            <tr>
              {this.props.data.columns.map((c) => (
                <th>{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {this.props.data.data.map((r) => (
              <tr key={r.id}>
                {/* {this.props.data.columns.map((c) => (
                  <td>{r[c]}</td>
                ))} */}
                <td>{r.id}</td>
                <td>{r.name}</td>
                <td>
                  {r.address.street}, {r.address.suite}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

class Reports extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div></div>;
  }
}
const EmployeeData = reportsHOC(Reports, {
  url: "https://jsonplaceholder.typicode.com/users",
  columns: ["Id", "Emp Name", "Emp Address"],
  header: "Employee Data",
});

const CompanyData = reportsHOC(Data, {
  url: "https://jsonplaceholder.typicode.com/users",
  columns: ["Company Name", "Company Phrase"],
  header: "Company Data",
});
class AdminDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <EmployeeData />
        <CompanyData />
      </>
    );
  }
}

const element = <AdminDashboard />;
ReactDOM.render(element, document.getElementById("root"));
