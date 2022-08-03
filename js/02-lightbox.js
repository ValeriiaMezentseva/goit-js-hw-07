import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const createImagesGallery = (images) => {
    return images.map(({ preview, original, description }) =>
     `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
           class ="gallery__image"
            src = "${preview}"
            alt = "${description}"
            />
    </a>
</li>  `
    )
        .join('');
};
const onImagesClick = (event) => {
    event.preventDefault();
    if (event.target.nodeName != 'IMG') {
        return
    }
};
let gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});


const container = document.querySelector(".gallery");
container.insertAdjacentHTML('beforeend', createImagesGallery(galleryItems));
container.addEventListener('click', onImagesClick);