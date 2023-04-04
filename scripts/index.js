// Блок редактирования пользователя

const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__subtitle');
const profileEditUserButoon = document.querySelector('.profile__editbutton')
// форма в popup_edit-user
const popupProfileEdit = document.querySelector('.popup_type_edit-user');
const popupProfileCloseButton = popupProfileEdit.querySelector('.popup__close');
const nameInput = popupProfileEdit.querySelector('.form__input_string_name');
const jobInput = popupProfileEdit.querySelector('.form__input_string_job');
const formEdit = popupProfileEdit.querySelector('.form_edit-user');
function openPopupBox(popup) {
    popup.classList.add('popup_opened');
}
// функция закрыфтия окна редактирования пользователя
function closePopupBox(popup) {
    popup.classList.remove('popup_opened');
}
// слушаем собятия связаны с окном редактирования пользователя
popupProfileCloseButton.addEventListener('click', () => {closePopupBox(popupProfileEdit)});

formEdit.addEventListener('submit', (event)=>{
    event.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopupBox(popupProfileEdit);});

profileEditUserButoon.addEventListener('click', () =>{
    openPopupBox(popupProfileEdit);
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
  });

// Блок добавления фотографий

const imageCardButton = document.querySelector('.profile__addbutton');
const popupAddCard = document.querySelector('.popup_type_add-card');
const formAddCard = document.querySelector('.form_add-card');
const inputNamePhoto = document.querySelector('.form__input_string_name-photo');
const inputSrcPhoto = document.querySelector('.form__input_string_src-photo');
const cardFormEditBtn = popupAddCard.querySelector('.form__input-btn');
const cardCloseBtn = popupAddCard.querySelector('.popup__close');

imageCardButton.addEventListener('click', () => {openPopupBox(popupAddCard)});

cardCloseBtn.addEventListener('click', () => {closePopupBox(popupAddCard)})

// Функция добавления карточки 
formAddCard.addEventListener('submit', (event) => {
    event.preventDefault();
    const cardData = {
      link: inputSrcPhoto.value,
      name: inputNamePhoto.value
    };
    elements.prepend(createCard(cardData));
    closePopupBox(popupAddCard)
})

const itemTemplate = document.querySelector('.template').content;
const elements = document.querySelector('.elements');
// лайк мусорка и фулл скрин
function likeActive(event) {
    const eventTarget = event.target;
    eventTarget.classList.toggle('element__hurt_active')
}

function deletecard(event) {
    const card = event.target.closest('.element')
    card.remove()
}

const popupFullScreen = document.querySelector('.popup_type_fullScreen');
const popupFullScreenClose = document.querySelector('.popup__fullScreenclose');
const elementFullScreenImg = document.querySelector('.popup__fullScreenimg');
const elementFullScreenCaption = document.querySelector('.popup__fullScreencaption');

function handleOpenImagePreview(event) {
    const elementImg = event.target.closest('.element__image');
    openPopupBox(popupFullScreen);
    elementFullScreenImg.src = elementImg.src;
    elementFullScreenImg.alt = elementImg.alt;
    elementFullScreenCaption.textContent = elementImg.alt;
}
function setEventListeners(htmlElement){
    htmlElement.querySelector('.element__button-trash').addEventListener('click', deletecard);
    htmlElement.querySelector('.element__hurt').addEventListener('click',likeActive);
    htmlElement.querySelector('.element__image').addEventListener('click', handleOpenImagePreview);
}

// функция создания карточки 
function createCard(item) {
    const cardElement = itemTemplate.cloneNode(true);
    const image = cardElement.querySelector('.element__image');
    const nameImage = cardElement.querySelector('.element__header');
    image.src = item.link;
    image.alt = item.name;
    nameImage.textContent = item.name;
    setEventListeners(cardElement);
    return cardElement;
}
initialCards.forEach(function (item) {
    const elementCreate = createCard(item);
    elements.prepend(elementCreate);
})

// функция закрытия полного экрана

popupFullScreenClose.addEventListener('click',() =>{
    closePopupBox(popupFullScreen);
})