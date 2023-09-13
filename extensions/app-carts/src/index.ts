import { InputQuery, FunctionResult, FunctionError } from '../generated/api';

interface Error {
  localizedMessage: string;
  target: string;
}

export default (input) => {
  const error: Error = {
    localizedMessage:
      'There is an order maximum of $1,000 for customers without established order history',
    target: 'cart'
  };
  const orderSubtotal = parseFloat(input.cart.cost.subtotalAmount.amount);
  const errors: Error[] = [];

  if (orderSubtotal > 100000) {
    if (input.cart.buyerIdentity && input.cart.buyerIdentity.customer) {
      if (input.cart.buyerIdentity.customer.numberOfOrders < 5) {
        errors.push(error);
      }
      // if VN not add to car
      if (input.localization.country.isoCode == 'UK') {
        errors.push({
          localizedMessage: 'VN Not Add to Card',
          target: 'cart'
        });
      }
    } else {
      errors.push(error);
    }
  }

  return { errors };
};
