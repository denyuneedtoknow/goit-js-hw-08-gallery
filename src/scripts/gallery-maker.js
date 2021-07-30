import { galleryItems } from './gallery-data'

export function galleryMaker() {
    const galleryEl = document.querySelector(".gallery");
    const galleryArray = [];

    const galleryMaking = galleryItems.forEach(
        ({ preview, original, description }, idx) => {
            const itemLink = document.createElement("a");
            itemLink.classList.add("gallery__link");
            const itemEl = document.createElement("li");
            itemEl.classList.add("gallery__item");
            itemEl.insertAdjacentHTML(
                "beforeEnd",
                `<a class="gallery__link", data-index="${idx}", href="${original}" ><img  class="gallery__image", src = '${preview}', data-source = '${original}', alt = '${description}',,>  </img></a>`
            );
            galleryArray.push(itemEl);

        }
    );

    galleryEl.append(...galleryArray);
    // console.log(galleryEl);

}


// galleryEl.addEventListener("click", modalOpener);