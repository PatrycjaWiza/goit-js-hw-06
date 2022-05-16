const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingList = document.querySelector("#ingredients");
const ulIngredients = ingredients.forEach((n) => {
  const newList = document.createElement("li");
  console.log(newList);
  newList.textContent = n;

  newList.classList.add("item");
  ingList.append(newList);
});
