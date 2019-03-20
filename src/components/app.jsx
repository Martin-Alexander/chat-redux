import React from 'react';
import ChannelList from "../containers/ChannelList";
import MessageList from "../containers/MessageList";
import NewMessageField from "../containers/NewMessageField";
import UsernamePrompt from "../containers/UsernamePrompt";

export default class App extends React.Component {
  render() {
    return(
      <div>
        <ChannelList />
        <MessageList />
        <NewMessageField />
        <UsernamePrompt />
      </div>
    );
  }
}

