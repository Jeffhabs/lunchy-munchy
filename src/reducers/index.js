import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import RegisterReducer from '../reducers/register_reducer';

const rootReducer = combineReducers({
  register: RegisterReducer,
  form: formReducer
});

export default rootReducer;
