import { useSelector } from 'react-redux';

import {
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cart.selector';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import PaymentForm from '../../components/payment-form/payment-form.component';

import {
  CheckoutContainer,
  CheckoutHeader,
  LeftAlignedBlock,
  CenterAlignedBlock,
  RightAlignedBlock,
  Total,
} from './checkout.styles';

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

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
      <Total>Total: ${cartTotal}</Total>
      <PaymentForm />
    </CheckoutContainer>
  );
};

export default Checkout;
