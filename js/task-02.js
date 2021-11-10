const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsContainer = document.querySelector('#ingredients');

const elements = ingredients.map(element => {
  const newList = document.createElement('li');
  newList.textContent = element;
  newList.classList.add('item');
  return newList;
})

ingredientsContainer.append(...elements);