import { InputQuery, FunctionResult, FunctionError } from '../generated/api';

interface Error {
  localizedMessage: string;
  target: string;
}

export default (input: InputQuery) => {
  const error: Error = {
    localizedMessage: `There is an order maximum of $10 for customers without established order history ${input.cart.buyerIdentity?.customer?.metafield?.value}`,
    target: 'cart'
  };
  const orderSubtotal = parseFloat(input.cart.cost.subtotalAmount.amount);
  const errors: Error[] = [];

  // if (orderSubtotal > 10) {
  //   if (input.cart.buyerIdentity && input.cart.buyerIdentity?.customer) {
  //     if (input.cart?.buyerIdentity?.customer?.numberOfOrders < 5) {
  //       errors.push(error);
  //     }
  //   } else {
  //     errors.push(error);
  //   }
  // }

  return { errors };
};
