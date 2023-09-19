document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.email-collection-form');

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the default form submission

      // Get the email input value
      const emailInput = document.querySelector('#email');
      const firstNameInput = document.querySelector('#first_name');
      const lastNameInput = document.querySelector('#last_name');

      const emailValue = emailInput.value;
      const firstNameValue = firstNameInput.value;
      const lastNameValue = lastNameInput.value;

      // Log the email value to the console
      console.log(
        'Email submitted:',
        emailValue,
        firstNameValue,
        lastNameValue
      );

      // You can now send this data to your app's server or perform other actions as needed
    });
  }
});
