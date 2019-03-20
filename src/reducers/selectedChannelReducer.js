import { SET_CHANNEL } from "../actions";

export default function(state, action) {
  if (state === undefined) { return "test"; }

  switch (action.type) {
    case SET_CHANNEL:
      return action.payload.newChannel;
    default:
      return state;
  }
}