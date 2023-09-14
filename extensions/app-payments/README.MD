- Deploy Function Payment Customizations To Get Functions ID examples 8b873920-7810-47f7-b729-2bded44c7170
- Crete GraphQL to link with Function ID
```js
    mutation {
        paymentCustomizationCreate(paymentCustomization: {
            title: "Hide payment method by cart total",
            enabled: true,
            functionId: "8b873920-7810-47f7-b729-2bded44c7170",
        }) {
            paymentCustomization {
            id
            }
            userErrors {
            message
            }
        }
    }
```
Output:
```js
    {
        "data": {
        "paymentCustomizationCreate": {
        "paymentCustomization": {
            "id": "gid://shopify/PaymentCustomization/35258677"
        },
        "userErrors": []
        }
  }
```
- Create Value Of Payments Customization with Id of paymentCustomizations with GraphQL
```js
    mutation {
        metafieldsSet(metafields: [
            {
            ownerId: "gid://shopify/PaymentCustomization/35258677"
            namespace: "payment-customization"
            key: "function-configuration"
            value: "{ \"paymentMethodName\": \"Cash on Delivery\", \"cartTotal\": 10 }"
            type: "json"
            }
        ]) {
            metafields {
             id
            }
            userErrors {
             message
            }
        }
    }
```
