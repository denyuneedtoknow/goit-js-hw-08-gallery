const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];


const galleryEl = document.querySelector('.gallery')
const modalWindow = document.querySelector('.js-lightbox')
const modalPicture = document.querySelector('.lightbox__image')
const ModalCloseBtn = document.querySelector('[data-action="close-lightbox"]')


const galleryArray = []
let numInOrder = 0
const galleryMaking = galleryItems.forEach(({ preview, original, description }, idx) => {

  const itemLink = document.createElement('a')
  itemLink.classList.add('gallery__link')
  const itemEl = document.createElement('li')
  itemEl.classList.add('gallery__item')
  itemEl.insertAdjacentHTML('beforeEnd', `<a class="gallery__link", data-index="${idx}", href="${original}" ><img  class="gallery__image", src = '${preview}', data-source = '${original}', alt = '${description}',,>  </img></a>`)
  galleryArray.push(itemEl)
  // console.log(idx);

})
galleryEl.append(...galleryArray)

function modalOpener(e) {
  e.preventDefault()
  modalWindow.classList.add('is-open')
  modalPicture.alt = e.target.alt
  modalPicture.src = e.target.dataset.source
}
function modalCloser(e) {
  modalWindow.classList.remove('is-open')
  modalPicture.src = ''
  modalPicture.alt = ''

}

function modalWindowCloser(e) {
  if (e.target !== modalPicture) {
    modalCloser()
  }

}

// function onEnterOpener(e) {
//   console.log(e.key);
//   if (e.key !== "Enter") {
//     return
//   }

// }

// function indexRevealer(e) {
//   console.dir(e.target.dataset.number);
// }



function onEscapeClose(e) {
  if (e.key !== "Escape") {
    return
  }
  modalCloser()
}


function nextImage(e) {
  let dataNumber = Number(e.target.dataset.index)
  const activeGalleryItem = galleryArray[dataNumber]
  const activeImage = activeGalleryItem.querySelector('.gallery__image')

  let nextNumber = dataNumber + 1

  const nextGalleryItem = galleryArray[nextNumber]

  const nextImage = nextGalleryItem.querySelector('.gallery__image')

  modalPicture.src = nextImage.dataset.source

}

// function nextImage(e) {
//   let dataNumber = Number(e.target.dataset.index)
//   let nextNumber = dataNumber += 1
//   console.log(nextNumber);
//   return nextNumber
// }


// function nextModalPic(nextNumber) {
//   const nextGalleryItem = galleryArray[nextNumber]
//   const nextImage = nextGalleryItem.querySelectorAll('.gallery__image')
//   modalPicture.src = nextImage.dataset.source
// }

function onArrowChanger(e) {

  if (modalWindow.classList.contains('is-open')) {

    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') {
      return
    }
    else if (e.key === 'ArrowRight') {
      nextImage(e)
    }
    else if (e.key === 'ArrowLeft') {
      previousImage(e)
    }
  }
}



galleryEl.addEventListener('click', modalOpener)

ModalCloseBtn.addEventListener('click', modalCloser)

modalWindow.addEventListener('click', modalWindowCloser)

// window.addEventListener('keydown', onEnterOpener)

window.addEventListener('keydown', onArrowChanger)

window.addEventListener('keydown', onEscapeClose)

// window.addEventListener('focusin', indexRevealer)


