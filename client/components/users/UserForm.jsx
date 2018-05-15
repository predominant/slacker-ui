import React, {Component} from 'react';
import PropTypes from 'prop-types';

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onSubmit(e) {
    e.preventDefault();
    const node = this.refs.username;
    let username = node.value;
    this.props.setUserName(username);
    node.value = '';
  }
  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <input
          type='text'
          ref='username'
        />
      </form>
    )
  }
}

UserForm.propTypes = {
  setUserName: PropTypes.func.isRequired
}

export default UserForm;
