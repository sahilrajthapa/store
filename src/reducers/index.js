import {combineReducers} from 'redux';
import loginReducer from './login';
import homeReducer from './home';
import categoriesReducer from './categories';
import productsReducer from './products';
import profileReducer from './profile';

const rootReducer = combineReducers({
  login: loginReducer,
  home: homeReducer,
  categories: categoriesReducer,
  products: productsReducer,
  profile: profileReducer,
});

export default rootReducer;
