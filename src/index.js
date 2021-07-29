
import galleryMaker from './scripts/gallery-maker';
import galleryEl from './scripts/gallery-maker';


import { modalOpener, modalCloser, modalWindowCloser, onEscapeClose } from './scripts/modal-window'

galleryMaker()

const modalWindow = document.querySelector(".js-lightbox");
const modalPicture = document.querySelector(".lightbox__image");
const ModalCloseBtn = document.querySelector('[data-action="close-lightbox"]');

console.log(galleryEl);


// ModalCloseBtn.addEventListener("click", modalCloser);

// modalWindow.addEventListener("click", modalWindowCloser);

// window.addEventListener("keydown", onEscapeClose);