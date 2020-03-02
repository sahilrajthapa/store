import action from './actionCreator';

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
// export const POST_ORDER_FAILURE = 'POST_ORDER_FAILURE';

export const addToCart = action(ADD_TO_CART, 'payload');

export const removeFromCart = action(REMOVE_FROM_CART, 'payload');
