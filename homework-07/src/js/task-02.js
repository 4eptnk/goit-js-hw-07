const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const list = document.getElementById('ingredients');
var fragment = document.createDocumentFragment();
ingredients.forEach(ingredient => {
    console.log(ingredient);
    const ing = document.createElement('li');
    ing.textContent = ingredient;
    fragment.appendChild(ing);
});
list.appendChild(fragment);
