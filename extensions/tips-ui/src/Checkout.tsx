import {
  Banner,
  reactExtension,
  useSettings,
  BlockStack,
  Text
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension('purchase.checkout.block.render', () => (
  <Extension />
));

function Extension() {
  return (
    <Banner title="Hello Checkout UI">
      <BlockStack>
        <Text size="large">5%</Text>
        <Text size="large">10%</Text>
        <Text size="large">15%</Text>
      </BlockStack>
    </Banner>
  );
}
