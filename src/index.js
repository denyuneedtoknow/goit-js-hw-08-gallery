
import { galleryMaker, } from './scripts/gallery-maker';

import { modalOpener, modalCloser, modalWindowCloser, onEscapeClose } from './scripts/modal-window'

galleryMaker()

const modalWindow = document.querySelector(".js-lightbox");

const ModalCloseBtn = document.querySelector('[data-action="close-lightbox"]');

const galleryPic = document.querySelector(".gallery");


galleryPic.addEventListener("click", modalOpener);
ModalCloseBtn.addEventListener("click", modalCloser);

modalWindow.addEventListener("click", modalWindowCloser);

window.addEventListener("keydown", onEscapeClose);