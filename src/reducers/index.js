import { combineReducers } from 'redux';
import RegisterReducer from '../reducers/register_reducer';

const rootReducer = combineReducers({
  register: RegisterReducer
});

export default rootReducer;
