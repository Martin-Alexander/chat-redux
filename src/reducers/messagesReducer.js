import { SET_CHANNEL, GET_MESSAGES } from "../actions";

export default function(state, action) {
  if (state === undefined) { return []; }

  switch (action.type) {
    case GET_MESSAGES:
      return action.payload;
    case SET_CHANNEL:
      return action.payload.messages;
    default:
      return state;
  }
}
