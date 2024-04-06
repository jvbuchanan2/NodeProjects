import React from "react";
import { connect } from "react-redux";
import * as organizationActions from '../../redux/actions/organizationActions';
import PropTypes from 'prop-types';
import { bindActionCreators} from 'redux';

class OrganizationPage extends React.Component {
 state = {
      organization: {
        name: "",
        title: ""
      }
    };
  
    handleNameChange = event => {
      const organization = {...this.state.organization, name: event.target.value};
      this.setState({organization});
    }

  handleTitleChange = event => {
    const organization = {...this.state.organization, title: event.target.value};
    this.setState({organization});
  }

handleSubmit = (event) => {
  event.preventDefault();
  this.props.actions.createOrganization(this.state.organization);
};

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Organizations</h2>
        <h3>Add Organization</h3>
        <input type="text" onChange={this.handleNameChange} value={this.state.organization.name} />
        <input type="text" onChange={this.handleTitleChange} value={this.state.organization.title} />
        <input type="submit" value="Save" />
        { this.props.organizations.map(org => (
          <div key={org.title}>{org.name + ' -- ' + org.title}</div>
        ))}
      </form>
    );
  }
}

OrganizationPage.propTypes = {
  organizations: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    organizations: state.organizations
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(organizationActions, dispatch)
  };
}


export default connect(mapStateToProps,mapDispatchToProps)(OrganizationPage);