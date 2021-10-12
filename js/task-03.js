const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imgGalleryEl = document.querySelector('ul.gallery');
// console.log(imgGalleryEl);
const elementsGallery = images
  .map(
    (image) =>
      `<li><img class="image" src="${image.url}" alt="${image.alt}" width = "500" /></li>`
  )
  .join('');

imgGalleryEl.insertAdjacentHTML('beforeend', elementsGallery);
console.log(imgGalleryEl);
const styleImagesEl = document.querySelectorAll('.image');
console.log(styleImagesEl);
styleImagesEl.forEach((styleImageEl) => {
  styleImageEl.style.display = 'inline-flex';
  styleImageEl.style.display = 'flexBox';
  styleImageEl.style.padding = '5px';
  styleImageEl.style.marging = '5px';
  styleImageEl.style.borderRadius = '150px';
  styleImageEl.style.backgroundColor = prompt(
    'type for each picture: or tomato or green or purple',
    'tomato',
    'green',
    'purple'
  );
});
