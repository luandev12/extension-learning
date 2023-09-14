const NO_CHANGES = {
  operations: []
};

export default (input) => {
  const configuration = JSON.parse(
    input?.paymentCustomization?.metafield?.value ?? '{}'
  );
  if (!configuration.paymentMethodName || !configuration.cartTotal) {
    return NO_CHANGES;
  }

  const cartTotalInput = parseFloat(
    input.cart.cost.totalAmount.amount ?? '0.0'
  );
  // Use the configured cart total instead of a hardcoded value
  if (cartTotalInput < configuration.cartTotal) {
    console.error(
      'Cart total is not high enough, no need to hide the payment method.'
    );
    return NO_CHANGES;
  }

  // Use the configured payment method name instead of a hardcoded value
  const hidePaymentMethod = input.paymentMethods.find((method) =>
    method.name.includes(configuration.paymentMethodName)
  );

  if (!hidePaymentMethod) {
    return NO_CHANGES;
  }

  return {
    operations: [
      {
        hide: {
          paymentMethodId: hidePaymentMethod.id
        }
      }
    ]
  };
};
