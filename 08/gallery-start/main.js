const displayedImage = document.querySelector('.displayed-img')
const thumbBar = document.querySelector('.thumb-bar')

const btn = document.querySelector('button')
const overlay = document.querySelector('.overlay')

/* Declaring the array of image filenames */

/* Declaring the alternative text for each image file */

const images = [
  'pexels-eberhard-grossgasteiger-572897.jpg',
  'pexels-jeremy-bishop-2922672.jpg',
  'pexels-luis-del-río-15286.jpg',
  'pexels-quang-nguyen-vinh-2649403.jpg',
  'pexels-walid-ahmad-1509582.jpg',
]

/* Looping through images */

images.forEach((image) => {
  const newImage = document.createElement('img')
  newImage.setAttribute('src', `images/${image}`)
  newImage.setAttribute('alt', `image of nature`)
  thumbBar.appendChild(newImage)
})

/* Wiring up the Darken/Lighten button */
