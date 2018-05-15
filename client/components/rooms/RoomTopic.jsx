import React, {Component} from 'react';
import PropTypes from 'prop-types';

class RoomTopic extends Component {
  render() {
    let {topic} = this.props.room;
    if (topic === undefined)
      topic = 'No topic';
    return (
      <span className='topic_text'>Topic: {topic}</span>
    );
  }
}

RoomTopic.propTypes = {
  room: PropTypes.object.isRequired
}

export default RoomTopic;
