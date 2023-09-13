import {
  Banner,
  reactExtension,
  Divider,
  TextField,
  useApplyAttributeChange
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension('purchase.checkout.block.render', () => (
  <Extension />
));

function Extension() {
  const updateAttribute = useApplyAttributeChange();

  async function onCheckboxChange(value: string) {
    console.log(value, 'get data discount products');
    try {
      await updateAttribute({
        type: 'updateAttribute',
        key: 'ATTRIBUTE_KEY',
        value: value
      });
    } catch (error) {
      console.log(error, 'error attr');
    }
  }

  return (
    <Banner title="App Discount">
      <Divider />
      <TextField
        label="Discount"
        onChange={(e: string) => onCheckboxChange(e)}
      />
    </Banner>
  );
}
