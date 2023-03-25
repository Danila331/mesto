let editbutton = document.querySelector('.profile__editbutton');
let popupBox = document.querySelector('.popup');
let closebutton = document.querySelector('.popup__close');
let inputname = document.querySelector('.form__input_string_name');
let inputjob = document.querySelector('.form__input_string_job');
let profilename = document.querySelector('.profile__name');
let profilejob = document.querySelector('.profile__subtitle');
let popupform = document.querySelector('.form');
function openpopupBox() {
    popupBox.classList.add('popup_opened');
}

function closepopupBox() {
    popupBox.classList.remove('popup_opened');
}

closebutton.addEventListener('click', closepopupBox);

popupform.addEventListener('submit', (event)=>{
    event.preventDefault();
    profilename.textContent = inputname.value;
    profilejob.textContent = inputjob.value;
    closepopupBox();});

editbutton.addEventListener('click', () =>{
    openpopupBox();
    inputname.value = profilename.textContent;
    inputjob.value = profilejob.textContent;
  });