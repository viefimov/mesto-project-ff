const firstImage = new URL(
  "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  import.meta.url
);
const secondImage = new URL(
  "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  import.meta.url
);
const thirdImage = new URL(
  "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  import.meta.url
);
const fourthImage = new URL(
  "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  import.meta.url
);
const fifthImage = new URL(
  "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  import.meta.url
);
const sixthImage = new URL(
  "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  import.meta.url
);

export const initialCards = [
  {
    name: "Архыз",
    link: firstImage,
  },
  {
    name: "Челябинская область",
    link: secondImage,
  },
  {
    name: "Иваново",
    link: thirdImage,
  },
  {
    name: "Камчатка",
    link: fourthImage,
  },
  {
    name: "Холмогорский район",
    link: fifthImage,
  },
  {
    name: "Байкал",
    link: sixthImage,
  },
];
