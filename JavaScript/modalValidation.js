const setError = element => {
  element.classList.add("invalid");
  element.classList.remove("valid");
};

const setValid = element => {
  element.classList.add("valid");
  element.classList.remove("invalid");
};

const validateEmail = email => {
  const regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;

  if (email.value === "") {
    setError(email);
  } else if (!regex.test(email.value)) {
    setError(email);
  } else {
    setValid(email);
  }
};

const validatePassword = password => {
  const regex = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{8,16}$/;

  if (password.value === "") {
    setError(password);
  } else if (!regex.test(password.value)) {
    setError(password);
  } else {
    setValid(password);
  }
};

const validateNameConfirm = name => {
  if (name.value === "") {
    setError(name);
  } else {
    setValid(name);
  }
};

const validateLastNameConfirm = lastName => {
  if (lastName.value === "") {
    setError(lastName);
  } else {
    setValid(lastName);
  }
};

const validateForm = event => {
  switch (event.target.id) {
    case "nameConfirm":
      validateNameConfirm(event.target);
      break;
    case "lastNameConfirm":
      validateLastNameConfirm(event.target);
      break;
    case "email":
    case "loginEmail":
      validateEmail(event.target);
      break;
    case "password":
    case "loginPassword":
      validatePassword(event.target);
      break;
    default:
      setError(event.target);
  }
};

const inputFields = document.querySelectorAll(
  ".sign-up-modal__input, .log-in-modal__input"
);

inputFields.forEach(item => {
  item.addEventListener("blur", event => {
    validateForm(event);
  });
});
