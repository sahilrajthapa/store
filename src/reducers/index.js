import {combineReducers} from 'redux';
import loginReducer from './login';
import homeReducer from './home';
import categoriesReducer from './categories';
import productsReducer from './products';

const rootReducer = combineReducers({
  login: loginReducer,
  home: homeReducer,
  categories: categoriesReducer,
  products: productsReducer,
});

export default rootReducer;
