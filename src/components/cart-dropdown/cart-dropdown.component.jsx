import React from 'react';

import CustomButtom from '../custom-button/custom-button.components';

import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.components';

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
)

export default CartDropdown;