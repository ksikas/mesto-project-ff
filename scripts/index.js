// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;
const card = cardTemplate.querySelector('.card').cloneNode(true);

// @todo: DOM узлы
const content = document.querySelector('.content');
const places = content.querySelector('.places');
const placesList = places.querySelector('.places__list');
const addButton = content.querySelector('.profile__add-button');
const deleteButton = card.querySelector('.card__delete-button');

// @todo: Функция создания карточки
function createCard(obj, removeCard) {
  const cardImage = card.querySelector('.card__image');
  const cardTitle = card.querySelector('.card__title');

  cardImage.src = obj.link;
  cardImage.alt = obj.name;
  cardTitle.textContent = obj.name;

  deleteButton.addEventListener('click', removeCard());

  return card;
}

// @todo: Функция удаления карточки
function deleteCard() {
  card.remove();
}

// @todo: Вывести карточки на страницу
for (let i = 0; i < initialCards.length; i++) {
  placesList.append(createCard(initialCards[i], deleteCard));
}


