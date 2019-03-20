import React from "react";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setSelectedChannel } from "../actions/index";

class Channel extends React.Component {
  handleClick() {
    this.props.setSelectedChannel(this.props.data.name)
  }

  render() {
    return(
      <div onClick={this.handleClick.bind(this)} >{this.props.data.name}</div>
    )
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    { setSelectedChannel: setSelectedChannel },
    dispatch
  );
}

export default connect(null, matchDispatchToProps)(Channel);
