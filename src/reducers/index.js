import {combineReducers} from 'redux';
import loginReducer from './login';
import homeReducer from './home';
const rootReducer = combineReducers({
  login: loginReducer,
  home: homeReducer,
});

export default rootReducer;
