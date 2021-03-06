import {combineReducers} from 'redux';
import loginReducer from './login';
import homeReducer from './home';
import categoriesReducer from './categories';
import productsReducer from './products';
import profileReducer from './profile';
import cartReducer from './cart';
import ordersReducer from './orders';
import customersReducer from './customers';
import notificationsReducer from './notifications';
import contactsReducer from './contacts';

const rootReducer = combineReducers({
  login: loginReducer,
  home: homeReducer,
  categories: categoriesReducer,
  products: productsReducer,
  profile: profileReducer,
  cart: cartReducer,
  orders: ordersReducer,
  customers: customersReducer,
  notifications: notificationsReducer,
  contacts: contactsReducer,
});

export default rootReducer;
