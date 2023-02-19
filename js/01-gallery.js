import { galleryItems } from './gallery-items.js';

console.log(galleryItems);
// Change code below this line

//Створення і рендер розмітки на підставі масиву даних galleryItems
// і наданого шаблону елемента галереї

const galleryContainerEl = document.querySelector('.gallery');


function createGalleryItemsMarkup(items) {
    return items.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
    </a>
    </div>`
    }).join('');
}

const galleryItemEl = createGalleryItemsMarkup(galleryItems);
// console.log(galleryItemEl);
galleryContainerEl.innerHTML = galleryItemEl;


//Реалізація делегування на div.gallery

galleryContainerEl.addEventListener('click', onClickGalleryItem);

let onOpenModal;


function onClickGalleryItem(event) {
    event.preventDefault();

    if(event.target.dataset.source) {
        console.log('click');
    }

    // if(event.target.nodeName !== "IMG") {
    //     return;
    // }


    //отримання url великого зображення.
    const openLargeImg = event.target.dataset.source;
    console.log(openLargeImg);

    //Відкриття модального вікна по кліку на елементі галереї. 
    const onOpenModal = basicLightbox.create(`
    <img width="1400" height="900" src="${openLargeImg}">`);

    onOpenModal.show();


    //Додай закриття модального вікна після натискання клавіші Escape
    document.addEventListener('keydown', event => {
        if(event.code === "Escape") {
            onOpenModal.close();
        }
    });
}



    

 
 





