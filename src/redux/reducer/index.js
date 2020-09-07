import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer';
import RegisterReducer from './RegisterReducer';

const reducer = combineReducers({
  LoginReducer,
  RegisterReducer,
});

export default reducer;
