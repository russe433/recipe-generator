// modal
const modalCloseButton = document.querySelector("#close");
const modalBg = document.querySelector(".modal-background");
const modal = document.querySelector(".modal");

modalCloseButton.addEventListener("click", () => {
  modalCloseButton.classList.add("is-active");
});

modalBg.addEventListener("click", () => {
  modal.classList.remove("is-active");
});

//API Fetches
const searchBtn = document.getElementById("search-btn");
const recipeList = document.getElementById("recipes");
const recipeView = document.querySelector("recipe-view");
const recipeCloseBtn = document.getElementById("recipe-close-btn");

// Event Listeners
searchBtn.addEventListener("click", getRecipeList);

// Get recipes that match ingredient input
function getRecipeList() {
  let searchInputText = document.getElementById("search-input").value.trim();
  fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputText}"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}
// Meal DB URL: www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast
