import { galleryItems } from './gallery-items.js'


const gallery = document.querySelector('.gallery')

const imagesHTML = galleryItems.map(({ preview, original, description }) => {
	return `<div class='gallery__item'>
	  <a class='gallery__link' href='${original}'>
		<img class='gallery__image' src='${preview}' data-source='${original}' alt='${description}' />
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

    const onEscapePress = (event) => {
      if (event.key === 'Escape') {
			  instance.close();
			  document.removeEventListener('keydown', onEscapePress);
			}
    };
		instance.show();
		document.addEventListener('keydown', onEscapePress);
	};
});


// gallery.addEventListener('click', event => {
// 	event.preventDefault()
// 	if (event.target.tagName === 'IMG') {
// 		const instance = basicLightbox.create(`
//       <img src="${event.target.dataset.source}" alt="${event.target.alt}">
//     `)
// 		instance.show();
// 		document.addEventListener('keydown', event => {
// 			if (event.key === 'Escape') {
// 			  instance.close();
// 			  document.removeEventListener('keydown', Escape);
// 			}
// 		  });
// 		  document.addEventListener('keydown', Escape);
// 	};
// })


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