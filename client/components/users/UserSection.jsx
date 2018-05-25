import React, {Component} from 'react';
import PropTypes from 'prop-types';

import UserForm from './UserForm.jsx';
import UserList from './UserList.jsx';

class UserSection extends Component {
  render() {
      return (
      <div className='sidebar_section'>
        <h6 className="sidebar-heading d-flex justify-content-between align-items-center">
        <span>Direct Messages</span>
          <a className="d-flex align-items-center text-muted" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
          </a>
        </h6>
        <UserForm {...this.props} />
        <UserList {...this.props} />
      </div>
    )
  }
}

UserSection.propTypes = {
  users: PropTypes.array.isRequired,
  setUserName: PropTypes.func.isRequired
}

export default UserSection;
