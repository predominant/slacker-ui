import React, {Component} from 'react';

class TeamHeading extends Component {
  render() {
    return (
      <div className='team_heading'>
        <div className='team_name'>Slacker</div>
        <div className='user_display_name'>
          <i className='presence'></i>
          graham
        </div>
      </div>
    );
  }
}

export default TeamHeading;
