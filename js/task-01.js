const numberOfCategoriesEl = document.querySelectorAll('li.item');
console.log(`Number of categories: ${numberOfCategoriesEl.length}`);

const titlesEl = document.querySelectorAll('h2');
titlesEl.forEach((titleEl) => {
  console.log(`Category: ${titleEl.textContent}`);
});

numberOfCategoriesEl.forEach((ulEl) => {
  const ulCategorEl = ulEl.querySelectorAll('li').length;
  console.log(`Elements: ${ulCategorEl}`);
});
