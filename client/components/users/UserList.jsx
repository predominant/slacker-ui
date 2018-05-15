import React, {Component} from 'react';
import PropTypes from 'prop-types';

import User from './User.jsx';

class UserList extends Component {
  render() {
    const {users} = this.props;
    return (
      <ul className='user_list'>
        {users.map( user => {
            return (
              <User
                user={user}
                key={user.id}
                {...this.props}
              />
            )
        })}
      </ul>
    )
  }
}

UserList.propTypes = {
  users: PropTypes.array.isRequired
//   setRoom: PropTypes.func.isRequired,
//   activeRoom: PropTypes.object.isRequired
}

export default UserList;
