export function closeModal(popup) {
  popup.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", closeModal);
  popup.removeEventListener("click", closeModal);
}

function closeOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    closeModal(evt.currentTarget);
  }
}

function closeEsc(evt) {
  if (evt.key == "Escape" || evt.key == "Esc") {
    closeModal(document.querySelector(".popup_is-opened"));
  }
}

export function openModal(popup) {
  popup.classList.add("popup_is-opened");
  popup.addEventListener("click", closeOverlay);
  document.addEventListener("keydown", closeEsc);
}
