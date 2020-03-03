import action from './actionCreator';

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const HANDLE_QUANTITY_INCREMENT = 'HANDLE_QUANTITY_INCREMENT';
export const HANDLE_QUANTITY_DECREMENT = 'HANDLE_QUANTITY_DECREMENT';
export const HANDLE_QUANTITY_CHANGE = 'HANDLE_QUANTITY_CHANGE';

export const CLEAR_CART = 'CLEAR_CART';

export const addToCart = action(ADD_TO_CART, 'payload');

export const removeFromCart = action(REMOVE_FROM_CART, 'payload');

export const handleQuantityIncrement = action(
  HANDLE_QUANTITY_INCREMENT,
  'payload',
);
export const handleQuantityDecrement = action(
  HANDLE_QUANTITY_DECREMENT,
  'payload',
);
export const handleQuantityChange = action(HANDLE_QUANTITY_CHANGE, 'payload');
