import { galleryItems } from './gallery-items.js'
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector('.gallery')



const imagesHTML = galleryItems.map((item) => {
	return `<div class='gallery__item'>
	<a class='gallery__link” href='${item.original}'>
	<img class='gallery__image' src='${item.preview}' data-source='${item.original}' alt='${item.description}' />
	 </a>
	 </div>`;
  });
  gallery.insertAdjacentHTML('beforeend', imagesHTML.join(''));


gallery.addEventListener('click', event => {
	event.preventDefault()
	if (event.target.tagName === 'IMG') {
		const instance = basicLightbox.create(`
      <img src="${event.target.dataset.source}" alt="${event.target.alt}">
    `)
		instance.show();
		document.addEventListener('keydown', event => {
			if (event.key === 'Escape') {
			  instance.close();
			}
		  });
	};
})


// document.addEventListener('keydown', event => {
// 	if (event.key === 'Escape') {
// 		const instance = basicLightbox.get();
// 		if (instance.visible()) {
// 			instance.close();
// 		} 
// 	}
// });

// document.addEventListener('keydown', event => {
// 	if (event.key === 'Escape') {
// 			instance.close();
// 	}
// });



// onClose: () => document.removeEventListener('keydown', callback)