export const SET_USERNAME  = "SET_USERNAME";
export const SET_CHANNEL   = "SET_CHANNEL";
export const SEND_MESSAGE  = "SEND_MESSAGE";
export const GET_MESSAGES = "GET_MESSAGES";

export function setUsername(username) {
  return({
    type: SET_USERNAME,
    payload: username
  });
};

export function setChannel(channelName) {
  const payload = getMessage(channelName).then((messages) => {
    return({
      newChannel: channelName,
      messages: messages
    });
  });

  return({
    type: SET_CHANNEL,
    payload: payload
  });
};

export function sendMessage(content, author, channel) {
  postMessage({ content: content, author: author }, channel);
  return({ type: SEND_MESSAGE, payload: "" });
};

export function getMessages(channel) {
  return({
    type: GET_MESSAGES,
    payload: getMessage(channel)
  });
};

function postMessage(message, channel) {
  fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(message)
    }
  ).catch(e => console.error(e));
}

function getMessage(channel) {
  return fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`)
    .then(response => response.json())
    .then(data => data.messages)
    .catch(e => console.error(e));
}