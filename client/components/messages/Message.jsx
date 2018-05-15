import React, {Component} from 'react';
import PropTypes from 'prop-types';
import fecha from 'fecha';
// import Linkify from 'react-linkify';
// import Unfurl from 'unfurled';
import ReactMarkdown from 'react-markdown';

class Message extends Component {
  render() {
    const {message} = this.props;
    const message_body = message.body.split("\n");
    // const unfurls = message.body.match(urlregex) || [];
    //let createdAt = fecha.format(new Date(message.createdAt), 'HH:mm:ss MM/DD/YY');
    let createdAt = fecha.format(new Date(message.createdAt), 'HH:mm');
    return (
      <div className='message'>
        <div className='outer'>
          <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=" width="36" height="36"/>
        </div>
        <div className='content'>
          <div className='header'>
            <span className="user_display_name">{message.author}</span>
            <span className="timestamp">{createdAt}</span>
          </div>
          <div className='body'>
            {message_body.map((line, index) => {
              let line_key = message.id + '-' + index;
              return (
                <ReactMarkdown key={line_key} source={line} />
              );
            })}
          </div>
          {/* <div className='unfurl'>
            {unfurls.map( url => {
              return (
                <div key="{url}">{Unfurl(url, {mode:'no-cors'})}</div>
              );
            })}
          </div> */}
        </div>
      </div>
    );
  }
}

Message.propTypes = {
  message: PropTypes.object.isRequired
}

export default Message;