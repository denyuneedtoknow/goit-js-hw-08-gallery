function modalOpener(e) {
    e.preventDefault();
    modalWindow.classList.add("is-open");
    modalPicture.alt = e.target.alt;
    modalPicture.src = e.target.dataset.source;
}

function modalCloser(e) {
    modalWindow.classList.remove("is-open");
    modalPicture.src = "";
    modalPicture.alt = "";
}

function modalWindowCloser(e) {
    if (e.target !== modalPicture) {
        modalCloser();
    }
}


function onEscapeClose(e) {
    if (e.key !== "Escape") {
        return;
    }
    modalCloser();
}

export { modalOpener, modalCloser, modalWindowCloser, onEscapeClose }