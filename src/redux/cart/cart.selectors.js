import { createSelector } from 'reselect';

// we should use reselect to avoid rerendering of the components,
// if the state object is not changed
const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
  cartItems.reduce(
    (accumalateQuantity, cartItem) => accumalateQuantity + cartItem.quantity, 
    0
  )
)