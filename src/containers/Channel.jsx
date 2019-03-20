import React from "react";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setChannel } from "../actions/index";

class Channel extends React.Component {
  handleClick() {
    this.props.setChannel(this.props.name)
  }

  render() {
    return(
      <div onClick={this.handleClick.bind(this)} >{this.props.name}</div>
    )
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    { setChannel: setChannel },
    dispatch
  );
}

export default connect(null, matchDispatchToProps)(Channel);
