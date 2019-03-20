import React from "react";
import { connect } from 'react-redux';

import Channel from "./Channel";

class ChannelList extends React.Component {
  render() {
    <div>
      {this.props.channels.map(channel => <Channel key={channel.id} data={channel}/>)}
    </div>
  }
}

function matchStateToProps(state) {
  return({ channels: state.channel });
}

export default connect(matchStateToProps, null)(ChannelList)