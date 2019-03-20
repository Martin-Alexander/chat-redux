import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setUsername } from "../actions/index";

class UsernamePrompt extends React.Component {
  constructor(props) {
    super(props);
    this.state = { usernameText: "" };
  }

  handleChange(changeEvent) {
    const inputValue = changeEvent.target.value;
    this.setState({ usernameText: inputValue });
  }

  handleClick() {
    this.props.setUsername(this.state.usernameText);
  }

  render() {
    return(
      <div>
        <input onChange={this.handleChange.bind(this)} type="text" value={this.state.usernameText}/>
        <button onClick={this.handleClick.bind(this)}>Submit</button>
      </div>
    )
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    { setUsername: setUsername },
    dispatch
  );
}

export default connect(null, matchDispatchToProps)(UsernamePrompt);
