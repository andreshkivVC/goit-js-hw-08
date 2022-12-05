import { galleryItems } from './gallery-items.js';
// // Change code below this line

// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const cardsContainer = document.querySelector('.gallery');
const cardsMarkup = creatGalleryCard(galleryItems);

cardsContainer.insertAdjacentHTML('beforeend', cardsMarkup);

function creatGalleryCard(images) {
  return images
    .map(
      ({ preview, original, description }) =>
        ` <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    )
    .join('');
}

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
