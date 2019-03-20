import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { sendMessage } from "../actions/index";

class NewMessageField extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messageText: "" };
  }

  handleChange(changeEvent) {
    const inputValue = changeEvent.target.value;
    this.setState({ messageText: inputValue });
  }

  handleClick() {
    this.props.sendMessage(
      this.state.messageText,
      this.props.username,
      this.props.selectedChannel
    );
  }

  render() {
    return(
      <div>
        <input
          placeholder="enter message"
          onChange={this.handleChange.bind(this)}
          type="text"
          value={this.state.messageText}
        />
        <button onClick={this.handleClick.bind(this)}>Submit</button>
      </div>
    );
  }
}

function matchStateToProps(state) {
  return({
    username: state.username,
    selectedChannel: state.selectedChannel
  });
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    { sendMessage: sendMessage },
    dispatch
  );
}

export default connect(matchStateToProps, matchDispatchToProps)(NewMessageField);