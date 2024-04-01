import "../pages/index.css";
import { closeModal, openModal } from "./modal.js";
import { createCard, deleteCard, likeCard } from "./card.js";
import { enableValidation, clearValidation } from "./validation.js";
import {
  getProfile,
  getInitialCards,
  postCard,
  patchAvatar,
  patchProfile,
} from "./api.js";
const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};
const editForm = document
  .querySelector(".popup_type_edit")
  .querySelector(".popup__form");
const addForm = document
  .querySelector(".popup_type_new-card")
  .querySelector(".popup__form");
const editAvatarForm = document
  .querySelector(".popup_type_edit-avatar")
  .querySelector(".popup__form");
const title = document.querySelector(".profile__title");
const cardList = document.querySelector(".places__list");
const description = document.querySelector(".profile__description");

function openImage(evt) {
  if (evt.target.hasAttribute("src")) {
    const popup = document.querySelector(".popup_type_image");
    const link = evt.target.getAttribute("src");
    const name =
      evt.target.parentElement.querySelector(".card__title").textContent;
    popup.querySelector(".popup__image").setAttribute("src", link);
    popup.querySelector(".popup__caption").textContent = name;
    openModal(popup);
  }
}
Promise.all([getProfile(), getInitialCards()])
  .then(([userInfo, cards]) => {
    document
      .querySelector(".profile__image")
      .setAttribute("style", `background-image: url('${userInfo.avatar}')`);
    document.querySelector(".profile__title").textContent = userInfo.name;
    document.querySelector(".profile__description").textContent =
      userInfo.about;
    cards.forEach((card) => {
      cardList.append(
        createCard(card, deleteCard, likeCard, openImage, userInfo._id)
      );
    });
  })
  .catch((error) => {
    console.error("Ошибка при загрузке данных:", error);
  });

function modalAct(evt) {
  if (evt.target == document.querySelector(".profile__add-button")) {
    const popup = document.querySelector(".popup_type_new-card");
    popup.querySelector(".popup__form").reset();
    openModal(popup);
    clearValidation(popup, config);
  }
  if (evt.target == document.querySelector(".profile__edit-button")) {
    const popup = document.querySelector(".popup_type_edit");
    popup.querySelector(".popup__input_type_name").value = title.textContent;
    popup.querySelector(".popup__input_type_description").value =
      description.textContent;
    clearValidation(popup, config);
    openModal(popup);
  }
  if (evt.target == document.querySelector(".profile__image-button")) {
    const popup = document.querySelector(".popup_type_edit-avatar");
    popup.querySelector(".popup__form").reset();
    openModal(popup);
    clearValidation(popup, config);
  }
}

function editProfile(evt) {
  evt.preventDefault();
  const submitButton = editForm.querySelector(".popup__button");
  submitButton.textContent = "Сохранить...";
  document.querySelector(".profile__title").textContent =
    editForm.querySelector(".popup__input_type_name").value;
  document.querySelector(".profile__description").textContent =
    editForm.querySelector(".popup__input_type_description").value;
  patchProfile(
    editForm.querySelector(".popup__input_type_name").value,
    editForm.querySelector(".popup__input_type_description").value
  )
    .then(() => {
      closeModal(document.querySelector(".popup_is-opened"));
    })
    .catch((error) => {
      console.error("Ошибка изменения профиля:", error);
    })
    .finally(() => {
      submitButton.textContent = "Сохранить";
    });
}
function editAvatar(evt) {
  evt.preventDefault();
  const submitButton = editAvatarForm.querySelector(".popup__button");
  submitButton.textContent = "Сохранить...";
  const link = editAvatarForm.querySelector(".popup__input_type_url").value;
  document
    .querySelector(".profile__image")
    .setAttribute("style", `background-image: url('${link}')`);
  patchAvatar(`${link}`)
    .then(() => {
      closeModal(document.querySelector(".popup_is-opened"));
    })
    .catch((error) => {
      console.error("Ошибка изменения профиля:", error);
    })
    .finally(() => {
      submitButton.textContent = "Сохранить";
    });
}

function addCard(evt) {
  evt.preventDefault();
  const submitButton = addForm.querySelector(".popup__button");
  submitButton.textContent = "Сохранить...";
  const newCardData = {
    name: addForm.querySelector(".popup__input_type_card-name").value,
    link: addForm.querySelector(".popup__input_type_url").value,
  };
  postCard(newCardData)
    .then((newCard) => {
      const newCardElement = createCard(
        newCard,
        deleteCard,
        likeCard,
        openImage,
        newCard.owner._id
      );
      cardList.prepend(newCardElement);
    })
    .then(() => {
      closeModal(document.querySelector(".popup_is-opened"));
    })
    .catch((error) => {
      console.error("Ошибка изменения профиля:", error);
    })
    .finally(() => {
      submitButton.textContent = "Сохранить";
    });
}

document
  .querySelector(".profile__add-button")
  .addEventListener("click", modalAct);

document
  .querySelector(".profile__edit-button")
  .addEventListener("click", modalAct);
document
  .querySelector(".profile__image-button")
  .addEventListener("click", modalAct);

editForm.addEventListener("submit", editProfile);

addForm.addEventListener("submit", addCard);
editAvatarForm.addEventListener("submit", editAvatar);

document.querySelectorAll(".popup__close").forEach(function (button) {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => closeModal(popup));
});

enableValidation(config);
