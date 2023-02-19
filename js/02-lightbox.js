import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


//Створення і рендер розмітки на підставі масиву даних

const containerEl = document.querySelector('.gallery');
console.log(containerEl);

const galleryItemsMarkup = 
galleryItems.reduce((acum, { preview, original, description }) => {
    return acum += `<li> <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a> </li>`
}, '');

console.log(galleryItemsMarkup);

containerEl.insertAdjacentHTML('beforeend', galleryItemsMarkup);

//Ініціалізація бібліотеки
//відображення підписів до зображень з атрибута alt
const lightbox = new SimpleLightbox(".gallery a", {
    captionType: 'attr',
    captionsData: 'alt',
    captionDelay: 250,
  });