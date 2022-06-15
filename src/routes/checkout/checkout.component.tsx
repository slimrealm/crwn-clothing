import { useSelector, useDispatch } from 'react-redux';
import { clearEntireCart } from '../../store/cart/cart.action';

import {
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cart.selector';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import PaymentForm from '../../components/payment-form/payment-form.component';
import Button, {
  BUTTON_TYPE_CLASSES,
} from '../../components/button/button.component';

import {
  CheckoutContainer,
  CheckoutHeader,
  LeftAlignedBlock,
  RightAlignedBlock,
  ClearCartAndTotalSection,
  Total,
} from './checkout.styles';

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  const dispatch = useDispatch();
  const clearEntireCartHandler = () => dispatch(clearEntireCart(cartItems));

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <LeftAlignedBlock>
          <span>Product</span>
        </LeftAlignedBlock>
        <LeftAlignedBlock>
          <span>Description</span>
        </LeftAlignedBlock>
        <RightAlignedBlock>
          <span>Quantity</span>
        </RightAlignedBlock>
        <RightAlignedBlock>
          <span>Price</span>
        </RightAlignedBlock>
        <RightAlignedBlock>
          <span>Remove</span>
        </RightAlignedBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <ClearCartAndTotalSection>
        <Button
          type="button"
          buttonType={BUTTON_TYPE_CLASSES.inverted}
          onClick={clearEntireCartHandler}
        >
          Clear Entire Cart
        </Button>
        <Total>Total: ${cartTotal}</Total>
      </ClearCartAndTotalSection>

      <PaymentForm />
    </CheckoutContainer>
  );
};

export default Checkout;
