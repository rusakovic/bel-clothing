import { createSelector } from 'reselect';

// we should use reselect to avoid rerendering of the components,
// if the state object is not changed
const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumalateQuantity, cartItem) => accumalateQuantity + cartItem.quantity, 
      0
    )
)

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumalateQuantity, cartItem) => accumalateQuantity + cartItem.quantity * cartItem.price, 
      0
    )
)