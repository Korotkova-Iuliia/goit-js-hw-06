const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredientsEl = document.querySelector('#ingredients');
const ingredientsEl = ingredients.map((ingredient) => {
  const addIngredient = document.createElement('li');
  addIngredient.textContent = ingredient;
  addIngredient.classList.add('item');
  console.log(addIngredient);
  return addIngredient;
});

listIngredientsEl.append(...ingredientsEl);
console.log(listIngredientsEl);
