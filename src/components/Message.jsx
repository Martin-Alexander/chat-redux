import React from "react";

export default class Message extends React.Component {
  render() {
    return(
      <div>
        <p>{this.props.data.content}</p>
        <p><strong>By: </strong>{this.props.data.author}</p>
      </div>
    );
  }
}