const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

// Блок редактирования пользователя

const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__subtitle');
const profileEditUserButoon = document.querySelector('.profile__editbutton')
// форма в popup_edit-user
const popupProfileEdit = document.querySelector('.popup_edit-user');
const popupProfileCloseButton = popupProfileEdit.querySelector('.popup__close');
const nameInput = popupProfileEdit.querySelector('.form__input_string_name');
const jobInput = popupProfileEdit.querySelector('.form__input_string_job');
const formEdit = popupProfileEdit.querySelector('.form_edit-user');
function OpenPopupBox(popup) {
    popup.classList.add('popup_opened');
}
// функция закрыфтия окна редактирования пользователя
function ClosePopupBox(popup) {
    popup.classList.remove('popup_opened');
}
// слушаем собятия связаны с окном редактирования пользователя
popupProfileCloseButton.addEventListener('click', () => {ClosePopupBox(popupProfileEdit)});

formEdit.addEventListener('submit', (event)=>{
    event.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    ClosePopupBox(popupProfileEdit);});

profileEditUserButoon.addEventListener('click', () =>{
    OpenPopupBox(popupProfileEdit);
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
  });

// Блок добавления фотографий

const imageCardButton = document.querySelector('.profile__addbutton');
const popupAddCard = document.querySelector('.popup_add-card');
const formAddCard = document.querySelector('.form_add-card');
const inputNamePhoto = document.querySelector('.form__input_string_name-photo');
const inputSrcPhoto = document.querySelector('.form__input_string_src-photo');
const cardFormEditBtn = popupAddCard.querySelector('.form__input-btn');
const cardCloseBtn = popupAddCard.querySelector('.popup__close');

imageCardButton.addEventListener('click', () => {OpenPopupBox(popupAddCard)});

cardCloseBtn.addEventListener('click', () => {ClosePopupBox(popupAddCard)})

// Функция добавления карточки 
formAddCard.addEventListener('submit', (event) => {
    event.preventDefault();
    const srcImage = inputSrcPhoto.value;
    const nameImage = inputNamePhoto.value;
    const dict = {};
    dict.name = nameImage
    dict.link = srcImage
    elements.prepend(CreateCard(dict));
    ClosePopupBox(popupAddCard)
})

const itemTemplate = document.querySelector('.template').content;
const elements = document.querySelector('.elements');
// лайк мусорка и фулл скрин
function LikeActive(event) {
    const eventTarget = event.target;
    eventTarget.classList.toggle('element__hurt_active')
}

function Deletecard(event) {
    const card = event.target.closest('.element')
    card.remove()
}

const popupFullScreen = document.querySelector('.popup_type_fullScreen');
const popupFullScreenClose = document.querySelector('.popup_type_fullScreen__close');
const elementFullScreenImg = document.querySelector('.popup_type_fullScreen__img');
const elementFullScreenCaption = document.querySelector('.popup_type_fullScreen__caption');

function addFullScreenContent(event) {
    const elementImg = event.target.closest('.element__image');
    OpenPopupBox(popupFullScreen);
    elementFullScreenImg.src = elementImg.src;
    elementFullScreenImg.alt = elementImg.alt;
    elementFullScreenCaption.textContent = elementImg.alt;
}
function setEventListeners(htmlElement){
    htmlElement.querySelector('.element__button-trash').addEventListener('click', Deletecard);
    htmlElement.querySelector('.element__hurt').addEventListener('click',LikeActive);
    htmlElement.querySelector('.element__image').addEventListener('click', addFullScreenContent);
}

// функция создания карточки 
function CreateCard(item) {
    const htmlElement = itemTemplate.cloneNode(true);
    const image = htmlElement.querySelector('.element__image');
    const nameImage = htmlElement.querySelector('.element__header');
    image.src = item.link;
    image.alt = item.name;
    nameImage.textContent = item.name;
    setEventListeners(htmlElement);
    return htmlElement;
}
initialCards.forEach(function (item) {
    const elementCReate = CreateCard(item);
    elements.prepend(elementCReate);
})

// функция закрытия полного экрана

popupFullScreenClose.addEventListener('click',() =>{
    ClosePopupBox(popupFullScreen);
})