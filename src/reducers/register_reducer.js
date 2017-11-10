import { REGISTER_USER } from '../actions/registerAction';

export default function(state = null, action) {
  switch(action.type) {
  case REGISTER_USER:
    return action.payload;
  }
  return state;
}