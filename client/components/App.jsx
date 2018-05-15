import React, {Component} from 'react';

import Socket from '../socket.js';
import TeamHeading from './teams/TeamHeading.jsx';
import RoomSection from './rooms/RoomSection.jsx';
import UserSection from './users/UserSection.jsx';
import MessageSection from './messages/MessageSection.jsx';

import styles from '../index.scss';
import 'typeface-lato';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRoom: {},
      messages: [],
      rooms: [],
      users: [],
      connected: false
    };
  }
  componentDidMount() {
    let ws = new WebSocket('ws://10.49.30.207:4000');
    let socket = this.socket = new Socket(ws);
    socket.on('connect', this.onConnect.bind(this));
    socket.on('disconnect', this.onDisconnect.bind(this));
    socket.on('room add', this.onAddRoom.bind(this));
    socket.on('user add', this.onAddUser.bind(this));
    socket.on('user edit', this.onEditUser.bind(this));
    socket.on('user remove', this.onRemoveUser.bind(this));
    socket.on('message add', this.onMessageAdd.bind(this));
    socket.on('ping', this.onPing.bind(this));
  }
  onPing(message) {
    this.socket.emit('pong');
  }
  onMessageAdd(message) {
    let {messages} = this.state;
    messages.push(message);
    this.setState({messages});
  }
  onAddUser(user) {
    let {users} = this.state;
    users.push(user);
    this.setState({users});
  }
  onEditUser(editUser) {
    let {users} = this.state;
    users = users.map(user => {
      if (editUser.id === user.id) {
        return editUser;
      }
      return user;
    });
    this.setState({users});
  }
  onRemoveUser(removeUser) {
    let {users} = this.state;
    users = users.filter(user => {
      return user.id !== removeUser.id;
    });
    this.setState({users});
  }
  onConnect() {
    this.setState({connected: true});
    this.socket.emit('room subscribe');
    this.socket.emit('user subscribe');
  }
  onDisconnect() {
    this.setState({connected: false});
  }
  onAddRoom(room) {
    let {rooms} = this.state;
    rooms.push(room);
    this.setState({rooms})

    // Check if activeRoom is empty, and update with the room that is marked as default
    if (Object.keys(this.state.activeRoom).length === 0 && this.state.activeRoom.constructor === Object && room.default) {
      this.setRoom(room);
    }
  }
  addRoom(name) {
    this.socket.emit('room add', {name});
  }
  setRoom(activeRoom) {
    this.setState({activeRoom});
    this.socket.emit('message unsubscribe');
    this.setState({messages: []});
    this.socket.emit('message subscribe', {roomId: activeRoom.id});
  }
  setUserName(name) {
    this.socket.emit('user edit', {name});
  }
  // sendMessage(text) {
  //   let {messages, activeRoom} = this.state;
  //   if (text.trim() == '')
  //     return;
  //   messages.push({
  //     id: activeRoom.id,
  //     text//,
  //     //author: 'graham'
  //   });
  //   // this.setState({messages});
  // }
  addMessage(body) {
    let {activeRoom} = this.state;
    this.socket.emit('message add', {roomId: activeRoom.id, body});
  }
  render() {
    return (
      <div className='slacker-app'>
        <nav className='sidebar'>
          <TeamHeading />
          <RoomSection
            {...this.state}
            addRoom={this.addRoom.bind(this)}
            setRoom={this.setRoom.bind(this)}
            activeRoom={this.state.activeRoom}
          />
          <UserSection
            {...this.state}
            setUserName={this.setUserName.bind(this)}
          />
        </nav>
        <main role='main'>
          <MessageSection
            room={this.state.activeRoom}
            messages={this.state.messages}
            addMessage={this.addMessage.bind(this)}
          />
        </main>
      </div>
    )
  }
}

export default App;
