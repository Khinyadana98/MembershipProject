const usernameHelperInfo = "&nbsp;";
const usernameHelperRequired = "Username is required.";
const usernameSize="Username must be between 6-20 characters";
const userHelperFormat = "Special Characters are not allowed";

const passHelperInfo = "&nbsp;";
const passHelperRequired = "Password is required.";
const passHelperSize = "Password must be between 8-20 characters";
const passHelperFormat =
  "Password must contain small, capital letters, numbers and special characters";

const userInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

const userRegex = /[^a-zA-Z0-9\\,\\ \\_\\.\\;]/g;
const passwordReg = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/;

const validateUsername = () => {
  const userText = userInput.value.trim();
  if (!userText) {
    userInput.classList.add("is-invalid");
    userInput.nextElementSibling.classList.remove("text-muted");
    userInput.nextElementSibling.classList.add("invalid-feedback");
    userInput.nextElementSibling.innerHTML = usernameHelperRequired;
    return false;
  } else if (userText.length < 6 || userText.length > 20) {
    userInput.classList.add("is-invalid");
    userInput.nextElementSibling.classList.remove("text-muted");
    userInput.nextElementSibling.classList.add("invalid-feedback");
    userInput.nextElementSibling.innerHTML = usernameSize;
    return false;
  } else if (userRegex.test(userText)) {
    userInput.classList.add("is-invalid");
    userInput.nextElementSibling.classList.remove("text-muted");
    userInput.nextElementSibling.classList.add("invalid-feedback");
    userInput.nextElementSibling.innerHTML = userHelperFormat;
    return false;
  }

  return true;
};
const validatePassword = () => {
  const passwordText = passwordInput.value.trim();
  if (!passwordText) {
    passwordInput.classList.add("is-invalid");
    passwordInput.nextElementSibling.classList.remove("text-muted");
    passwordInput.nextElementSibling.classList.add("invalid-feedback");
    passwordInput.nextElementSibling.innerHTML = passHelperRequired;
    return false;
  } else if (passwordText.length < 8 || passwordText.length > 20) {
    passwordInput.classList.add("is-invalid");
    passwordInput.nextElementSibling.classList.remove("text-muted");
    passwordInput.nextElementSibling.classList.add("invalid-feedback");
    passwordInput.nextElementSibling.innerHTML = passHelperSize;
    return false;
  } else if (!passwordReg.test(passwordText)) {
    passwordInput.classList.add("is-invalid");
    passwordInput.nextElementSibling.classList.remove("text-muted");
    passwordInput.nextElementSibling.classList.add("invalid-feedback");
    passwordInput.nextElementSibling.innerHTML = passHelperFormat;
    return false;
  }

  return true;
};

const validationForm = (event) => {
  event.preventDefault();
  const isUserValid = validateUsername();
  const isPasswordValid = validatePassword();
  if (isUserValid && isPasswordValid) {
    window.location.href = "member.html";
  }
};

userInput.addEventListener("focus", (event) => {
  event.target.classList.remove("is-invalid");
  event.target.nextElementSibling.classList.add("text-muted");
  event.target.nextElementSibling.classList.remove("invalid-feedback");
  event.target.nextElementSibling.innerHTML = usernameHelperInfo;
});

const clearPasswordError = (e) => {
  e.target.classList.remove("is-invalid");
  e.target.nextElementSibling.classList.add("text-muted");
  e.target.nextElementSibling.classList.remove("invalid-feedback");
  e.target.nextElementSibling.innerHTML = passHelperInfo;
};
