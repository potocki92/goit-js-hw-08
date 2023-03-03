// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector(".gallery")

const createItem = (item) => {
  return `
      <a class="gallery__item" href="${item.original}" data-autoshow="false">
        <img 
          class="gallery__image" 
          src="${item.preview}"
          data-source="${item.original}"
          alt="${item.description}"
        />
      </a>
  `
}

const items = galleryItems.map(item =>
  createItem(item)).join("");
gallery.innerHTML = items;

let lightbox = new SimpleLightbox(`.gallery a`, {
  captionDelay: 250,
  captionsData: 'alt',
  overlayOpacity: 0.7
})

gallery.addEventListener('click', (event) => {
  event.preventDefault();
  lightbox.loadImage()
})