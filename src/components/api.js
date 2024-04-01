const configApi = {
  baseUrl: "https://nomoreparties.co/v1/wff-cohort-10",
  headers: {
    authorization: "993fb472-7fb0-44c9-9d83-614e37184ef3",
    "Content-Type": "application/json",
  },
};
const handleResponse = (res) => {
  if (!res.ok) {
    throw new Error("Ошибка");
  }
};
export const getProfile = () => {
  return fetch(configApi.baseUrl + "/users/me", {
    headers: {
      authorization: configApi.headers.authorization,
    },
  })
    .then((res) => {
      handleResponse(res);
      return res.json();
    })
    .catch((error) => {
      console.error(error);
    });
};

export const getInitialCards = () => {
  return fetch(configApi.baseUrl + "/cards", {
    headers: {
      authorization: configApi.headers.authorization,
    },
  })
    .then((res) => {
      handleResponse(res);
      return res.json();
    })
    .catch((error) => {
      console.error(error);
    });
};

export const postCard = (cardData) => {
  return fetch(`${configApi.baseUrl}/cards`, {
    method: "POST",
    headers: configApi.headers,
    body: JSON.stringify(cardData),
  })
    .then((res) => {
      handleResponse(res);
      return res.json();
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
    .then((res) => {
      handleResponse(res);
      return res.json();
    })
    .catch((error) => {
      console.error("Ошибка удаления новой карточки:", error);
      throw error;
    });
};
export const likeCardApi = (cardId) => {
  return fetch(`${configApi.baseUrl}/cards/likes/${cardId}`, {
    method: "PUT",
    headers: {
      authorization: configApi.headers.authorization,
    },
  })
    .then((res) => {
      handleResponse(res);
      return res.json();
    })
    .then((card) => {
      return card;
    })
    .catch((error) => {
      console.error(error);
    });
};
export const dislikeCardApi = (cardId) => {
  return fetch(`${configApi.baseUrl}/cards/likes/${cardId}`, {
    method: "DELETE",
    headers: {
      authorization: configApi.headers.authorization,
    },
  })
    .then((res) => {
      handleResponse(res);
      return res.json();
    })
    .then((card) => {
      return card;
    })
    .catch((error) => {
      console.error(error);
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
    .then((res) => {
      handleResponse(res);
      res.json();
    })
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.error(error);
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
    .then((res) => {
      handleResponse(res);
      res.json();
    })
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.error(error);
    });
};
