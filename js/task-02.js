const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulIngredients = ingredients.forEach((n) => {
  const newList = document.createElement("li");
  console.log(newList);
  newList.textContent = n;

  return newList.classList.add("item");
});
