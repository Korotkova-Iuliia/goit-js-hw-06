const CategoriesEl = document.querySelectorAll('li.item');
console.log(`Number of categories: ${CategoriesEl.length}`);

CategoriesEl.forEach((CategoryEl) => {
  const titleEl = CategoryEl.querySelector('h2');
  console.log(`Category: ${titleEl.textContent}`);

  const ulCategorEl = CategoryEl.querySelectorAll('li').length;
  console.log(`Elements: ${ulCategorEl}`);
});
