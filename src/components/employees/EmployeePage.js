import React from "react";
import { connect } from "react-redux";
import * as employeeActions from '../../redux/actions/employeeActions';
import PropTypes from 'prop-types';
import { bindActionCreators} from 'redux';

class EmployeePage extends React.Component {
 state = {
      employee: {
        name: "",
        position: ""
      }
    };
  

  handleNameChange = event => {
    const employee = {...this.state.employee, name: event.target.value};
    this.setState({employee});
  }

  handleTitleChange = event => {
    const employee = {...this.state.employee, position: event.target.value};
    this.setState({employee});
  }

handleSubmit = (event) => {
  event.preventDefault();
  this.props.actions.createEmployee(this.state.employee);
};


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Employees</h2>
        <h3>Add Employee</h3>
        <input type="text" onChange={this.handleNameChange} value={this.state.employee.name} />
        <input type="text" onChange={this.handleTitleChange} value={this.state.employee.position} />
        <input type="submit" value="Save" />
        { this.props.employees.map(emp => (
          <div key={emp.name}>{emp.name + ' -- ' + emp.position}</div>
        ))}
      </form>
    );
  }
}

EmployeePage.propTypes = {
  employees: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    employees: state.employees
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(employeeActions, dispatch)
  };
}


export default connect(mapStateToProps,mapDispatchToProps)(EmployeePage);