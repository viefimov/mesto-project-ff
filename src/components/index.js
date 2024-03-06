// @todo: Темплейт карточки
import "../pages/index.css";
import { modalAct, editForm, edit, addCard, addForm } from "./modal.js";
import { initialCards, createCard } from "./cards.js";


export const cardList = document.querySelector(".places__list");


initialCards.forEach(function (card) {
  cardList.append(createCard(card));
});
document.querySelector(".profile__add-button").addEventListener("click", modalAct)
document
  .querySelector(".profile__edit-button")
  .addEventListener("click", modalAct);
editForm.addEventListener("submit", edit);
addForm.addEventListener("submit", addCard)