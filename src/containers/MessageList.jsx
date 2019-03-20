import React from "react";
import { connect } from 'react-redux';

import Message from "../components/Message";

class MessageList extends React.Component {
  render() {
    <div>
      {this.props.messges.map(messge => <Message key={message.id} data={messge} />)}
    </div>
  }
}

function matchStateToProps(state) {
  return ({ messges: state.messge });
}

export default connect(matchStateToProps, null)(MessageList)