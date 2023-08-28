const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");

const loginRegisterButton = document.querySelector(".btnLogin-popup");
const iconClose = document.querySelector(".icon-close");

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});
loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

loginRegisterButton.addEventListener("click", () => {
  if (wrapper.classList.contains("pop")) {
    wrapper.classList.remove("pop"); // Close the popup if it's open
  } else {
    wrapper.classList.add("pop");
  }
});
iconClose.addEventListener("click", () => {
  wrapper.classList.remove("pop");
});
