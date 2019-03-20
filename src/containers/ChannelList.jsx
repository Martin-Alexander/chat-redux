import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getMessages } from "../actions/index";

import Channel from "./Channel";

class ChannelList extends React.Component {
  componentWillMount() {
    this.props.getMessages(this.props.selectedChannel);
    setInterval(() => {
      this.props.getMessages(this.props.selectedChannel)
    }, 1000);
  }

  render() {
    return(
      <div>
        <Channel name="test"/>
        <Channel name="general"/>
        <Channel name="other"/>
      </div>
    );
  }
}

function matchStateToProps(state) {
  return ({ selectedChannel: state.selectedChannel });
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    { getMessages: getMessages },
    dispatch
  )
}

export default connect(matchStateToProps, matchDispatchToProps)(ChannelList)