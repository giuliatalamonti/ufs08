let emptyImages = new Array(5).fill('')

const images = emptyImages.map((_, i) => {
  return {src: `./images/img${i + 1}.jpg`, alt: `Image from gallery ${1}`}
})

const gallery = document.querySelector('.imagesGallery')

function handleClickImg(e) {
  const poster = document.querySelector('#mainImg')
  poster.innerHTML = '' //reset
  const imgPoster = document.createElement('img')
  imgPoster.setAttribute('alt', e.target.alt)
  imgPoster.setAttribute('src', e.target.src)
  imgPoster.classList.add('imagePoster')
  poster.appendChild(imgPoster)
}

images.forEach((image) => {
  const imgElem = document.createElement('img')
  imgElem.setAttribute('alt', image.alt)
  imgElem.setAttribute('src', image.src)
  imgElem.classList.add('image')
  imgElem.addEventListener('click', handleClickImg)
  gallery.appendChild(imgElem)
})




