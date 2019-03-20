import React from "react";
import { connect } from 'react-redux';

import Message from "../components/Message";

class MessageList extends React.Component {
  render() {
    if (this.props.messages) {
      return(
        <div>
          {this.props.messages.map(message => <Message key={message.id} data={message} />)}
        </div>
      );
    } else {
      return(<div>no messages</div>);
    }
  }
}

function matchStateToProps(state) {
  return ({ messages: state.messages });
}

export default connect(matchStateToProps, null)(MessageList)