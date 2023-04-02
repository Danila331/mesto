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

let profilename = document.querySelector('.profile__name');
let profilejob = document.querySelector('.profile__subtitle');
let openProfileeditUserButoon = document.querySelector('.profile__editbutton')
// форма в popup_edit-user
let popupProfileEdit = document.querySelector('.popup_edit-user');
let popupProfileCloseButton = popupProfileEdit.querySelector('.popup__close');
let nameInput = popupProfileEdit.querySelector('.form__input_string_name');
let jobInput = popupProfileEdit.querySelector('.form__input_string_job');
let formEdit = popupProfileEdit.querySelector('.form_edit-user');
function openEditUserPopupBox() {
    popupProfileEdit.classList.add('popup_opened');
}
// функция закрыфтия окна редактирования пользователя
function closeEditUserPopupBox() {
    popupProfileEdit.classList.remove('popup_opened');
}
// слушаем собятия связаны с окном редактирования пользователя
popupProfileCloseButton.addEventListener('click', closeEditUserPopupBox);

formEdit.addEventListener('submit', (event)=>{
    event.preventDefault();
    profilename.textContent = nameInput.value;
    profilejob.textContent = jobInput.value;
    closeEditUserPopupBox();});

openProfileeditUserButoon.addEventListener('click', () =>{
    openEditUserPopupBox();
    nameInput.value = profilename.textContent;
    jobInput.value = profilejob.textContent;
  });

// Блок добавления фотографий

let OpenImageCardButton = document.querySelector('.profile__addbutton');
let PopupAddCard = document.querySelector('.popup_add-card');
let FormAddCard = document.querySelector('.form_add-card');
let InputNamePhoto = document.querySelector('.form__input_string_name-photo');
let InputSrcPhoto = document.querySelector('.form__input_string_src-photo');
let CardformEditBtn = PopupAddCard.querySelector('.form__input-btn');
let CardCloseBtn = PopupAddCard.querySelector('.popup__close');

function OpenPopupAddCard() {
    PopupAddCard.classList.add('popup_opened');
}

function ClosePopupAddCard() {
    PopupAddCard.classList.remove('popup_opened');
}

OpenImageCardButton.addEventListener('click',OpenPopupAddCard);

CardCloseBtn.addEventListener('click', ClosePopupAddCard)

// Функция добавления карточки 
FormAddCard.addEventListener('submit', (event) => {
    event.preventDefault();
    const SrcImage = InputSrcPhoto.value;
    const NameImage = InputNamePhoto.value;
    var dict = {};
    dict.name = NameImage
    dict.link = SrcImage
    elements.prepend(CreateCard(dict));
    ClosePopupAddCard()
})

const itemTemplate = document.querySelector('.template').content;
const elements = document.querySelector('.elements');
// лайк мусорка и фулл скрин
function LikeActive(event) {
    let eventTarget = event.target;
    eventTarget.classList.toggle('element__hurt_active')
}

function Deletecard(event) {
    let card = event.target.closest('.element')
    card.remove()
}

const popupFullScreen = document.querySelector('.popup-fullScreen');
const popupFullScreenClose = document.querySelector('.popup-fullScreen__close');
const elementFullScreenImg = document.querySelector('.popup-fullScreen__img');
const elementFullScreenCaption = document.querySelector('.popup-fullScreen__caption');
function OpenPopupFullscren() {
    popupFullScreen.classList.add('popup_opened');
}
function addFullScreenContent(event) {
    const elementImg = event.target.closest('.element__image');
    OpenPopupFullscren();
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
    let Image = htmlElement.querySelector('.element__image');
    let NameImage = htmlElement.querySelector('.element__header');
    Image.src = item.link;
    Image.alt = item.name;
    NameImage.textContent = item.name;
    setEventListeners(htmlElement);
    return htmlElement;
}
initialCards.forEach(function (item) {
    const elementCReate = CreateCard(item);
    elements.prepend(elementCReate);
})

// функция закрытия полного экрана
function PopupScreenClose() {
    popupFullScreen.classList.remove('popup_opened')
}

popupFullScreenClose.addEventListener('click',() =>{
    PopupScreenClose();
})