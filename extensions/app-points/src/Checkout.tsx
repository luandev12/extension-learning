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
  const { title, description, status } = useSettings();

  if (!status) return;
  return (
    <Banner title="Hello Checkout UI">
      <BlockStack>
        <Text size="large">{title}</Text>
        <Text size="small">{description}</Text>
      </BlockStack>
    </Banner>
  );
}
