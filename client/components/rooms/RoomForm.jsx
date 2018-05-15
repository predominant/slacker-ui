import React, {Component} from 'react';
import PropTypes from 'prop-types';

class RoomForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onSubmit(e) {
    e.preventDefault();
    const node = this.refs.room;
    let roomName = node.value;
    this.props.addRoom(roomName);
    node.value = '';
  }
  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <input
          type='text'
          ref='room'
        />
      </form>
    )
  }
}

RoomForm.propTypes = {
  addRoom: PropTypes.func.isRequired
}

export default RoomForm;
