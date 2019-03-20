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
    this.props.sendMessage(this.state.messageText);
  }

  render() {
    return(
      <div>
        <input onChange={this.handleChange.bind(this)} type="text" value={this.state.messageText} />
        <button onClick={this.handleClick.bind(this)}>Submit</button>
      </div>
    );
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    { sendMessage: sendMessage },
    dispatch
  );
}

export default connect(null, matchDispatchToProps)(NewMessageField);