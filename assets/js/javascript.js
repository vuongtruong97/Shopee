const loginBtns = document.querySelectorAll(".js__navbar-item-login");
const registerBtns = document.querySelectorAll(".js__navbar-item-register");
const modalBodyLogin = document.querySelector(".js__modal--login");
const modalContainers = document.querySelectorAll(".js__modal-body");
const modalBodyResgis = document.querySelector(".js__modal--register");
const headerSearchInput = document.querySelector(".js__header-search-input");
const headerSearchSuggest = document.querySelectorAll(".search__list-item");
function showModalContainerLogin() {
  modalBodyLogin.classList.add("show");
}
function hiddenModalContainer() {
  modalBodyLogin.classList.remove("show");
}
function showModalContainerRegis() {
  modalBodyResgis.classList.add("show");
}
function hiddenModalContainerRegis() {
  modalBodyResgis.classList.remove("show");
}
for (const loginBtn of loginBtns) {
  loginBtn.addEventListener("click", showModalContainerLogin);
}
for (const registerBtn of registerBtns) {
  registerBtn.addEventListener("click", showModalContainerRegis);
}
modalBodyResgis.addEventListener("click", hiddenModalContainerRegis);
modalBodyLogin.addEventListener("click", hiddenModalContainer);
for (const modalContainer of modalContainers) {
  modalContainer.addEventListener("click", function (event) {
    event.stopPropagation();
  });
}
var inputSuggetContent;
headerSearchInput.oninput = function (event) {
  inputSuggetContent = event.target.value;
  for (var i = 0; i < headerSearchSuggest.length; i++) {
    headerSearchSuggest[i].textContent = inputSuggetContent;
  }
};
