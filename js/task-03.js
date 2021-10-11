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
console.log(imgGalleryEl);
const elementsGallery = images.map((data) => {
  const itemEl = document.createElement('li');
  console.log(itemEl);

  const imageEl = document.createElement('img');
  // console.log(imageEl);
  itemEl.append(imageEl);
  imgGalleryEl.append(itemEl);
});
// const image = document.querySelector('.image');
// console.log(image.src);
// image.url = 'https://placeimg.com/640/480/tech';
// insertAdjacentHTML();
