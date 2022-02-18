// form but must return error message if submit button pushed with unfilled fields or active errors

const emailInput = document.querySelector("input[name='email']");
const countryInput = document.querySelector("input[name='country']");
const zipInput = document.querySelector("input[name='zip']");
const passwordInput = document.querySelector("input[name='password']");
const passwordConfirmationInput = document.querySelector(
  "input[name='password-confirmation']"
);
const formSubmitButton = document.querySelector("input[type='submit']");

emailInput.addEventListener("input", () => {
  emailInput.setCustomValidity("");
  emailInput.checkValidity();
});

emailInput.addEventListener("invalid", () => {
  if (emailInput.value === "") {
    emailInput.setCustomValidity("Please enter your email!");
  }
});

countryInput.addEventListener("input", () => {
  countryInput.setCustomValidity("");
  countryInput.checkValidity();
});

countryInput.addEventListener("invalid", () => {
  if (countryInput.value === "") {
    countryInput.setCustomValidity("Please enter your country!");
  }
});

zipInput.addEventListener("input", () => {
  zipInput.setCustomValidity("");
  zipInput.checkValidity();
});

zipInput.addEventListener("invalid", () => {
  if (zipInput.value === "") {
    zipInput.setCustomValidity("Please enter your zip code!");
  }
});

passwordInput.addEventListener("input", () => {
  passwordInput.setCustomValidity("");
  passwordInput.checkValidity();
});

passwordInput.addEventListener("invalid", () => {
  if (passwordInput.value === "") {
    passwordInput.setCustomValidity("Please enter a password!");
  }
});

passwordConfirmationInput.addEventListener("input", () => {
  passwordConfirmationInput.setCustomValidity("");
  passwordConfirmationInput.checkValidity();

  passwordConfirmationInput.setCustomValidity("");
  passwordConfirmationInput.checkValidity();
});

passwordConfirmationInput.addEventListener("invalid", () => {
  if (passwordConfirmationInput.value === "") {
    passwordConfirmationInput.setCustomValidity(
      "Please enter your password again!"
    );
  }
});

passwordConfirmationInput.addEventListener("change", () => {
  if (passwordConfirmationInput.value !== passwordInput.value) {
    passwordConfirmationInput.setCustomValidity("Both passwords must match!");
  }
});
