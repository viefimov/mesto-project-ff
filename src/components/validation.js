const showInputError = (formElement, inputElement, errorMessage, config) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(`${config.inputErrorClass}`);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(`${config.errorClass}`);
};

const hideInputError = (formElement, inputElement, config) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(`${config.inputErrorClass}`);
  errorElement.classList.remove(`${config.errorClass}`);
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement, config) => {
  const pattern = inputElement.getAttribute("pattern");
  const regex = new RegExp(pattern);

  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      config
    );
  } else if (pattern && !regex.test(inputElement.value)) {
    showInputError(
      formElement,
      inputElement,
      inputElement.dataset.errorMessage,
      config
    );
  } else {
    hideInputError(formElement, inputElement, config);
  }
};

const setEventListeners = (formElement, config) => {
  const inputList = Array.from(
    formElement.querySelectorAll(`${config.inputSelector}`)
  );
  const buttonElement = formElement.querySelector(
    `${config.submitButtonSelector}`
  );
  toggleButtonState(inputList, buttonElement, config);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement, config);
      toggleButtonState(inputList, buttonElement, config);
    });
  });
};

export const enableValidation = (config) => {
  const formList = Array.from(
    document.querySelectorAll(`${config.formSelector}`)
  );
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement, config);
  });
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    const pattern = inputElement.getAttribute("pattern");
    const regex = new RegExp(pattern);
    return (
      !inputElement.validity.valid ||
      (pattern && !regex.test(inputElement.value))
    );
  });
};
const toggleButtonState = (inputList, buttonElement, config) => {
  const isValid = !hasInvalidInput(inputList);
  if (isValid) {
    buttonElement.removeAttribute("disabled"); // Activate the button
    buttonElement.classList.remove(`${config.inactiveButtonClass}`);
  } else {
    buttonElement.setAttribute("disabled", "disabled"); // Deactivate the button
    buttonElement.classList.add(`${config.inactiveButtonClass}`);
  }
};

export const clearValidation = (popup, config) => {
  const formElement = popup.querySelector(`${config.formSelector}`);
  const inputList = Array.from(
    formElement.querySelectorAll(`${config.inputSelector}`)
  );
  const buttonElement = formElement.querySelector(
    `${config.submitButtonSelector}`
  );
  inputList.forEach((inputElement) => {
    hideInputError(formElement, inputElement, config);
  });
  buttonElement.setAttribute("disabled", "disabled");
  buttonElement.classList.add(`${config.inactiveButtonClass}`);
};
