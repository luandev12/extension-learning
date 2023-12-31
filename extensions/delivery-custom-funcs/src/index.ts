import { InputQuery, FunctionResult } from '../generated/api';

const NO_CHANGES: FunctionResult = {
  operations: []
};

type Configuration = {
  stateProvinceCode: string;
  message: string;
};

export default (input: InputQuery): FunctionResult => {
  const configuration: Configuration = JSON.parse(
    input?.deliveryCustomization?.metafield?.value ?? '{}'
  );

  const message = 'May be delayed due to weather conditions';

  let toRename = input.cart.deliveryGroups
    .filter(() => input.localization.country.isoCode === 'VN')
    .flatMap((group) => group.deliveryOptions)
    .map((option) => ({
      rename: {
        deliveryOptionHandle: option.handle,
        title:
          option.title === 'Economy'
            ? configuration.message
            : `${option.title} - ${message}`
      }
    }));

  return {
    operations: toRename
  };
};
