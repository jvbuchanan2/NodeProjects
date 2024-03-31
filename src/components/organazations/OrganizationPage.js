import React from "react";
import { connect } from "react-redux";
import * as OrganizationActions from '../../redux/actions/organizationActions';
import PropTypes from 'prop-types';

class OrganizationPage extends React.Component {
 state = {
      organization: {
        title: ""
      }
    };
  

  handleChange = event => {
    const organization = {...this.state.organization, title: event.target.value};
    this.setState({organization});
  }

handleSubmit = (event) => {
  event.preventDefault();
  this.props.dispatch(OrganizationActions.createOrganization(this.state.organization))
};

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Organizations</h2>
        <h3>Add Organization</h3>
        <input type="text" onChange={this.handleChange} value={this.state.organization.title} />
        <input type="submit" value="Save" />
        { this.props.organizations.map(org => (
          <div key={org.title}>{org.title}</div>
        ))}
      </form>
    );
  }
}

OrganizationPage.propTypes = {
  organizations: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    organizations: state.organizations
  }
}

// function mapDispatchToProps() {
// }


export default connect(mapStateToProps)(OrganizationPage);