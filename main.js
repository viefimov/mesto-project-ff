(()=>{"use strict";function e(t){t.classList.remove("popup_is-opened"),document.removeEventListener("keydown",e),t.removeEventListener("click",e)}function t(t){t.target===t.currentTarget&&e(t.currentTarget)}function r(t){"Escape"!=t.key&&"Esc"!=t.key||e(document.querySelector(".popup_is-opened"))}function n(e){e.classList.add("popup_is-opened"),e.addEventListener("click",t),document.addEventListener("keydown",r)}var o={baseUrl:"https://nomoreparties.co/v1/wff-cohort-10",headers:{authorization:"993fb472-7fb0-44c9-9d83-614e37184ef3","Content-Type":"application/json"}},c=document.querySelector("#card-template").content;function u(e,t,r){t.classList.contains("card__like-button_is-active")?(t.classList.remove("card__like-button_is-active"),function(e,t){fetch("".concat(o.baseUrl,"/cards/likes/").concat(t),{method:"DELETE",headers:{authorization:o.headers.authorization}}).then((function(e){return e.json()})).then((function(t){return e.textContent=t.likes.length,t}))}(e,r)):t.classList.contains("card__like-button_is-active")||(t.classList.add("card__like-button_is-active"),function(e,t){fetch("".concat(o.baseUrl,"/cards/likes/").concat(t),{method:"PUT",headers:{authorization:o.headers.authorization}}).then((function(e){return e.json()})).then((function(t){return e.textContent=t.likes.length,t}))}(e,r))}function a(e,t){e.remove(),function(e){fetch("".concat(o.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:{authorization:o.headers.authorization}}).then((function(e){if(!e.ok)throw new Error("Не удалось удалить карточку");return e.json()})).catch((function(e){throw console.error("Ошибка удаления новой карточки:",e),e}))}(t)}function i(e,t,r,n,o){var u=c.querySelector(".card").cloneNode(!0);u.querySelector(".card__image").setAttribute("src",e.link),u.querySelector(".card__image").setAttribute("alt","".concat(e.name," на фото")),u.querySelector(".card__title").textContent=e.name;var a=u.querySelector(".card__delete-button");e.owner&&e.owner._id!=o?a.style.display="none":a.addEventListener("click",(function(){t(u,e._id)}));var i=u.querySelector(".card__like-count");i.textContent=e.likes.length;var l=u.querySelector(".card__like-button");return e.likes.forEach((function(e){e._id===o&&l.classList.add("card__like-button_is-active")})),l.addEventListener("click",(function(){r(i,l,e._id)})),u.querySelector(".card__image").addEventListener("click",n),u}var l=function(e,t,r,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add("".concat(n.inputErrorClass)),o.textContent=r,o.classList.add("".concat(n.errorClass))},s=function(e,t,r){var n=e.querySelector(".".concat(t.id,"-error"));t.classList.remove("".concat(r.inputErrorClass)),n.classList.remove("".concat(r.errorClass)),n.textContent=""},p=function(e,t,r){var n=!function(e){return e.some((function(e){var t=e.getAttribute("pattern"),r=new RegExp(t);return!e.validity.valid||t&&!r.test(e.value)}))}(e);n?(t.removeAttribute("disabled"),t.classList.remove("".concat(r.inactiveButtonClass))):(t.setAttribute("disabled","disabled"),t.classList.add("".concat(r.inactiveButtonClass)))},d=function(e,t){var r=e.querySelector("".concat(t.formSelector)),n=Array.from(r.querySelectorAll("".concat(t.inputSelector))),o=r.querySelector("".concat(t.submitButtonSelector));n.forEach((function(e){s(r,e,t)})),o.setAttribute("disabled","disabled"),o.classList.add("".concat(t.inactiveButtonClass))};function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var f,y,m,v={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},h=document.querySelector(".popup_type_edit").querySelector(".popup__form"),S=document.querySelector(".popup_type_new-card").querySelector(".popup__form"),b=document.querySelector(".popup_type_edit-avatar").querySelector(".popup__form"),q=document.querySelector(".profile__title"),g=document.querySelector(".places__list"),E=document.querySelector(".profile__description");function C(e){if(e.target.hasAttribute("src")){var t=document.querySelector(".popup_type_image"),r=e.target.getAttribute("src"),o=e.target.parentElement.querySelector(".card__title").textContent;t.querySelector(".popup__image").setAttribute("src",r),t.querySelector(".popup__caption").textContent=o,n(t)}}function k(e){if(e.target==document.querySelector(".profile__add-button")){var t=document.querySelector(".popup_type_new-card");t.querySelector(".popup__form").reset(),n(t),d(t,v)}if(e.target==document.querySelector(".profile__edit-button")){var r=document.querySelector(".popup_type_edit");r.querySelector(".popup__input_type_name").value=q.textContent,r.querySelector(".popup__input_type_description").value=E.textContent,d(r,v),n(r)}if(e.target==document.querySelector(".profile__image-button")){var o=document.querySelector(".popup_type_edit-avatar");o.querySelector(".popup__form").reset(),n(o),d(o,v)}}Promise.all([(f=document.querySelector(".profile__image"),y=document.querySelector(".profile__title"),m=document.querySelector(".profile__description"),fetch(o.baseUrl+"/users/me",{headers:{authorization:o.headers.authorization}}).then((function(e){return e.json()})).then((function(e){return f.setAttribute("style","background-image: url('".concat(e.avatar,"')")),y.textContent=e.name,m.textContent=e.about,e}))),fetch(o.baseUrl+"/cards",{headers:{authorization:o.headers.authorization}}).then((function(e){return e.json()})).then((function(e){return e}))]).then((function(e){var t,r,n=(r=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,c,u,a=[],i=!0,l=!1;try{if(c=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;i=!1}else for(;!(i=(n=c.call(r)).done)&&(a.push(n.value),a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(t,r)||function(e,t){if(e){if("string"==typeof e)return _(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0];n[1].forEach((function(e){g.append(i(e,a,u,C,o._id))}))})).catch((function(e){console.error("Ошибка при загрузке данных:",e)})),document.querySelector(".profile__add-button").addEventListener("click",k),document.querySelector(".profile__edit-button").addEventListener("click",k),document.querySelector(".profile__image-button").addEventListener("click",k),h.addEventListener("submit",(function(t){t.preventDefault();var r=h.querySelector(".popup__button");r.textContent="Сохранить...",document.querySelector(".profile__title").textContent=h.querySelector(".popup__input_type_name").value,document.querySelector(".profile__description").textContent=h.querySelector(".popup__input_type_description").value,function(e,t){var r=JSON.stringify({name:e,about:t});return fetch(o.baseUrl+"/users/me",{method:"PATCH",headers:o.headers,body:r}).then((function(e){return e.json()})).then((function(e){return e}))}(h.querySelector(".popup__input_type_name").value,h.querySelector(".popup__input_type_description").value).then((function(){r.textContent="Сохранить",e(document.querySelector(".popup_is-opened"))})).catch((function(e){console.error("Ошибка изменения профиля:",e),r.textContent="Сохранить"}))})),S.addEventListener("submit",(function(t){t.preventDefault();var r,n=S.querySelector(".popup__button");n.textContent="Сохранить...",(r={name:S.querySelector(".popup__input_type_card-name").value,link:S.querySelector(".popup__input_type_url").value},fetch("".concat(o.baseUrl,"/cards"),{method:"POST",headers:o.headers,body:JSON.stringify(r)}).then((function(e){if(!e.ok)throw new Error("Не удалось добавить карточку");return e.json()})).catch((function(e){throw console.error("Ошибка добавления новой карточки:",e),e}))).then((function(e){var t=i(e,a,u,C,e.owner._id);g.prepend(t)})).then((function(){n.textContent="Сохранить",e(document.querySelector(".popup_is-opened"))})).catch((function(e){console.error("Error adding new card:",e)}))})),b.addEventListener("submit",(function(t){t.preventDefault();var r=b.querySelector(".popup__button");r.textContent="Сохранить...";var n=b.querySelector(".popup__input_type_url").value;document.querySelector(".profile__image").setAttribute("style","background-image: url('".concat(n,"')")),function(e){var t=JSON.stringify({avatar:e});return fetch(o.baseUrl+"/users/me/avatar",{method:"PATCH",headers:o.headers,body:t}).then((function(e){return e.json()})).then((function(e){return e}))}("".concat(n)).then((function(){r.textContent="Сохранить",e(document.querySelector(".popup_is-opened"))}))})),document.querySelectorAll(".popup__close").forEach((function(t){var r=t.closest(".popup");t.addEventListener("click",(function(){return e(r)}))})),function(e){Array.from(document.querySelectorAll("".concat(e.formSelector))).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var r=Array.from(e.querySelectorAll("".concat(t.inputSelector))),n=e.querySelector("".concat(t.submitButtonSelector));p(r,n,t),r.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,r){var n=t.getAttribute("pattern"),o=new RegExp(n);t.validity.valid?n&&!o.test(t.value)?l(e,t,t.dataset.errorMessage,r):s(e,t,r):l(e,t,t.validationMessage,r)}(e,o,t),p(r,n,t)}))}))}(t,e)}))}(v)})();