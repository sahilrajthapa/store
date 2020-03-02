import * as types from '../actions/cart';

const initialState = {
  cart: [],
};

const addToCart = (state, action) => {
  const clonedCart = state.cart.map(item => ({...item}));
  const previouslySelectedItem = clonedCart.find(
    item => item.id === action.payload.id,
  );
  if (!!previouslySelectedItem) {
    previouslySelectedItem.quantity =
      previouslySelectedItem.quantity + action.payload.quantity;
  } else {
    clonedCart.push(action.payload);
  }

  return {
    ...state,
    cart: clonedCart,
  };
};

function cartReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.ADD_TO_CART:
      return addToCart(state, action);

    case types.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id),
      };

    default: {
      return state;
    }
  }
}
export default cartReducer;
