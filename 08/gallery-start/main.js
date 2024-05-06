let emptyImages = new Array(5).fill('')

const images = emptyImages.map((_, i) => {
  return {src: `./images/img${i + 1}.jpg`, alt: `Image from gallery ${1}`}
})

const gallery = document.querySelector('.imagesGallery')

images.forEach((image) => {
  const imgElem = document.createElement('img')
  imgElem.setAttribute('alt', image.alt)
  imgElem.setAttribute('src', image.src)
  imgElem.classList.add('image')
  gallery.appendChild(imgElem)
})
