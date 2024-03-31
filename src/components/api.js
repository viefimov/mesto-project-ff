const configApi = {
  baseUrl: "https://nomoreparties.co/v1/wff-cohort-10",
  headers: {
    authorization: "993fb472-7fb0-44c9-9d83-614e37184ef3",
    "Content-Type": "application/json",
  },
};
export const getProfile = (avatar, name, about) => {
  return fetch(configApi.baseUrl + "/users/me", {
    headers: {
      authorization: configApi.headers.authorization,
    },
  })
    .then((res) => res.json())
    .then((userInfo) => {
      avatar.setAttribute(
        "style",
        `background-image: url('${userInfo.avatar}')`
      );
      name.textContent = userInfo.name;
      about.textContent = userInfo.about;
      return userInfo;
    });
};

export const getInitialCards = () => {
  return fetch(configApi.baseUrl + "/cards", {
    headers: {
      authorization: configApi.headers.authorization,
    },
  })
    .then((res) => res.json())
    .then((result) => {
      return result;
    });
};

export const postCard = (cardData) => {
  return fetch(`${configApi.baseUrl}/cards`, {
    method: "POST",
    headers: configApi.headers,
    body: JSON.stringify(cardData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Не удалось добавить карточку");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Ошибка добавления новой карточки:", error);
      throw error;
    });
};
export const deleteCardApi = (cardId) => {
  return fetch(`${configApi.baseUrl}/cards/${cardId}`, {
    method: "DELETE",
    headers: {
      authorization: configApi.headers.authorization,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Не удалось удалить карточку");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Ошибка удаления новой карточки:", error);
      throw error;
    });
};
export const likeCardApi = (likeCount, cardId) => {
  return fetch(`${configApi.baseUrl}/cards/likes/${cardId}`, {
    method: "PUT",
    headers: {
      authorization: configApi.headers.authorization,
    },
  })
    .then((res) => res.json())
    .then((card) => {
      likeCount.textContent = card.likes.length;
      return card;
    });
};
export const dislikeCardApi = (likeCount, cardId) => {
  return fetch(`${configApi.baseUrl}/cards/likes/${cardId}`, {
    method: "DELETE",
    headers: {
      authorization: configApi.headers.authorization,
    },
  })
    .then((res) => res.json())
    .then((card) => {
      likeCount.textContent = card.likes.length;
      return card;
    });
};
export const patchAvatar = (avatar) => {
  const requestBody = JSON.stringify({
    avatar: avatar,
  });
  return fetch(configApi.baseUrl + "/users/me/avatar", {
    method: "PATCH",
    headers: configApi.headers,
    body: requestBody,
  })
    .then((res) => res.json())
    .then((result) => {
      return result;
    });
};
export const patchProfile = (name, about) => {
  const requestBody = JSON.stringify({
    name: name,
    about: about,
  });
  return fetch(configApi.baseUrl + "/users/me", {
    method: "PATCH",
    headers: configApi.headers,
    body: requestBody,
  })
    .then((res) => res.json())
    .then((result) => {
      return result;
    });
};
