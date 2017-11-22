var popup = document.querySelector(".modal");
var overlay = document.querySelector(".modal-overlay");
var form = popup.querySelector("form");

var btnFeedback = document.querySelector(".feedback");
var btnClose = document.querySelector(".close");
var fieldName = popup.querySelector("[name=name]");
var mail = popup.querySelector("[name=mail]");
var comment = popup.querySelector("[name=comment]");

btnFeedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-error");
  popup.classList.remove("modal-hide");
  overlay.classList.remove("modal-hide");
  fieldName.focus();
});

btnClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-hide");
  overlay.classList.add("modal-hide");
});

form.addEventListener("submit", function (evt) {
  if (!fieldName.value || !mail.value || !comment.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  }
});    
