const password = document.querySelector("#password");
const error_password = document.querySelector("#passwordMsg");

const password_confirmation = document.querySelector("#password_confirmation");
const error_confirmation = document.querySelector("#confirmationMsg");
const confirmationLabel = document.querySelector("#confirmationLabel");

function verifyPassword(pass) {
  if (pass.length < 8) {
    error_password.innerText = "* Password must contain atleast 8 characters";
    password.style.borderColor = "#191515";
    password_confirmation.disabled = true;
    confirmationLabel.classList.add("disabled");
  } else {
    password.style.borderColor = "#4caf50";
    error_password.innerText = "";
    password_confirmation.disabled = false;
    confirmationLabel.classList.remove("disabled");
  }
}

function confirmPassword(pass) {
  if (password.value.trim() !== pass.trim()) {
    error_confirmation.innerText = "* Password do not match";
    password_confirmation.style.borderColor = "#191515";
  } else {
    error_confirmation.innerText = "";
    password_confirmation.style.borderColor = "#4caf50";
  }
}
