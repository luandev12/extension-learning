document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.email-collection-form');

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the default form submission

      // Get the email input value
      const emailInput = document.querySelector('#email');
      const emailValue = emailInput.value;

      // Log the email value to the console
      console.log('Email submitted:', emailValue);

      // You can now send this data to your app's server or perform other actions as needed
    });
  }
});
