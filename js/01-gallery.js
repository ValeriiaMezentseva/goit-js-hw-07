import { galleryItems } from './gallery-items.js';
// Change code below this line


const createImagesGallery = (images) => {
    return images.map(({ preview, original, description }) =>
        `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
           class ="gallery__image"
            src = "${preview}"
            data-source= "${original}"
            alt = "${description}"
            />
    </a>
</div>  `
    )
        .join('');
};

const onImagesClick = (event) => {
    event.preventDefault();
    if (event.target.nodeName != 'IMG') {
        return
    }
 const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}">
`,
     {
         onShow: (instance) => {
             window.addEventListener("keydown", onEscapePress)
         },
         onClose: (instance) => {
             window.removeEventListener("keydown", onEscapePress )
         },
 })

    instance.show()
    function onEscapePress(event) {
    if (event.code === "Escape") {
        instance.close();
    }
}
}

const container = document.querySelector(".gallery");
container.insertAdjacentHTML('beforeend', createImagesGallery(galleryItems));
container.addEventListener('click', onImagesClick);



