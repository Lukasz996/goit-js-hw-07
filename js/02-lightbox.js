import { galleryItems } from './gallery-items.js';

console.log(galleryItems);



const gallery = document.querySelector('.gallery')
    const imagesHTML = galleryItems.map((item) => {
        return `<a class='gallery__item' href='${item.original}'>
        <img class='gallery__image' src='${item.preview}' alt='${item.description}' />
         </a>`;
      });
      gallery.insertAdjacentHTML('beforeend', imagesHTML.join(''));
    
      const lightbox = new SimpleLightbox('.gallery a', {
        loop: true,
        captionsData: 'alt',
        captionDelay: 250,
        docClose: true,
        alertErrorMessage: 'Image not found, next image will be loaded'
      });





      // import { galleryItems } from ‘./gallery-items.js’;
      // // Change code below this line
      // console.log(galleryItems);
      // const gallery = document.querySelector(“.gallery”)
      //     const imagesHTML = galleryItems.map((item) => {
      //         return `<a class=“gallery__item” href=“${item.original}“>
      //         <img class=“gallery__image” src=“${item.preview}” alt=“${item.description}” />
      //          </a>`;
      //       });
      //       gallery.insertAdjacentHTML(“beforeend”, imagesHTML.join(“”));
      //     //   var lightbox = $(‘.gallery a’).simpleLightbox({
      //       var lightbox = new SimpleLightbox(“.gallery a”, {
      //         loop: true,
      //         captionsData: “alt”,
      //         captionDelay: 250,
      //         docClose: true,
      //         alertErrorMessage: ‘Image not found, next image will be loaded’
      //       });


      