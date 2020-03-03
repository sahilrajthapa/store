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

const handleQuantityIncrement = (state, action) => {
  const clonedCart = state.cart.map(item => ({...item}));
  const selectedProduct = clonedCart.find(
    item => item.id === action.payload.id,
  );
  selectedProduct.quantity = selectedProduct.quantity + 1;
  return {
    ...state,
    cart: clonedCart,
  };
};

const handleQuantityDecrement = (state, action) => {
  const clonedCart = state.cart.map(item => ({...item}));
  const selectedProduct = clonedCart.find(
    item => item.id === action.payload.id,
  );
  selectedProduct.quantity =
    selectedProduct.quantity === 1 ? 1 : selectedProduct.quantity - 1;
  return {
    ...state,
    cart: clonedCart,
  };
};

const handleQuantityChange = (state, action) => {
  const clonedCart = state.cart.map(item => ({...item}));
  const selectedProduct = clonedCart.find(
    item => item.id === action.payload.id,
  );
  selectedProduct.quantity = action.payload.value ? action.payload.value : 1;
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

    case types.HANDLE_QUANTITY_INCREMENT:
      return handleQuantityIncrement(state, action);

    case types.HANDLE_QUANTITY_DECREMENT:
      return handleQuantityDecrement(state, action);

    case types.HANDLE_QUANTITY_CHANGE:
      return handleQuantityChange(state, action);

    case types.CLEAR_CART:
      return {
        ...state,
        cart: [],
      };

    default: {
      return state;
    }
  }
}
export default cartReducer;
