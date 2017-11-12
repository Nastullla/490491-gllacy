var btnFeedback = document.querySelector(".feedback");
var btnClose = document.querySelector(".close");
var btnSubmit = document.querySelector(".send-button");
var popup = document.querySelector(".modal");
var overlay = document.querySelector(".modal-overlay");
// var nameValue = popup.querySelector("[name=name]");
// var mailValue = popup.querySelector("[name=mail]");
// var letterValue = popup.querySelector("[name=letter]");

btnFeedback.addEventListener("click", function (evt) {
  evt.preventDefault();
	popup.classList.remove("modal-hide");
  overlay.classList.remove("modal-hide");
});

btnClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-hide");
  overlay.classList.add("modal-hide");
});

/*
function ValidateField(field, evt) {
  if (!field.value) {
    field.classList.add("validaition-error");
    evt.preventDefault();
  }  
}

btnSubmit.addEventListener("click", function (evt) {
  ValidateField(nameValue, evt);
  ValidateField(mailValue, evt);
  ValidateField(letterValue, evt);
})
*/