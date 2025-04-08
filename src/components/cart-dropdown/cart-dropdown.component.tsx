import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import {
  selectCartItems,
  selectIsCartOpen,
} from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';

import {
  CartDropdownWindow,
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
  CloseButtonHeader,
  CloseButton,
} from './cart-dropdown.styles';

const CartDropdown = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);
  const isCartOpen = useSelector(selectIsCartOpen);
  const navigate = useNavigate();

  const cartCloseHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (isCartOpen) {
      dispatch(setIsCartOpen(false));
    }
  };

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  return (
    <CartDropdownWindow>
      <CloseButtonHeader>
        <CloseButton onClick={cartCloseHandler}>&#10005;</CloseButton>
      </CloseButtonHeader>
      <CartDropdownContainer>
        <CartItems>
          {cartItems.length ? (
            cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
          ) : (
            <EmptyMessage>Your cart is empty</EmptyMessage>
          )}
        </CartItems>
        <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
      </CartDropdownContainer>
    </CartDropdownWindow>
  );
};

export default CartDropdown;
