import React, {Component} from 'react';
import PropTypes from 'prop-types';

import RoomForm from './RoomForm.jsx';
import RoomList from './RoomList.jsx';

class RoomSection extends Component {
  render() {
    return (
      <div className='sidebar_section'>
        <h6 className="sidebar-heading d-flex justify-content-between align-items-center">
          <span>Discussion Rooms</span>
          <a className="d-flex align-items-center text-muted" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
          </a>
        </h6>
        <RoomList {...this.props} />
        <RoomForm {...this.props} />
      </div>
    )
  }
}

RoomSection.propTypes = {
  rooms: PropTypes.array.isRequired,
  setRoom: PropTypes.func.isRequired,
  addRoom: PropTypes.func.isRequired,
  activeRoom: PropTypes.object.isRequired
}

export default RoomSection;
