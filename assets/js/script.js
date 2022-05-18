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
const recipeView = document.querySelector("recipe-content");
const recipeCloseBtn = document.getElementById("recipe-close-btn");

var queryIngredient = "#search-btn";

// Event Listeners
searchBtn.addEventListener("click", getRecipeList);
recipeList.addEventListener("click", getMealRecipe);

// Get recipes that match ingredient input
function getRecipeList() {
  let searchInputText = document.getElementById("search-input").value.trim();
  fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputText}`
  )
    .then((response) => response.json())
    .then((data) => {
      let html = "";
      if (data.meals) {
        data.meals.forEach((meal) => {
          html += `
                <div class= "card" data-id = "${meal.idMeal}">
                      <div class="card-image has-text-centered px-6">
                        <img
                        src= "${meal.strMealThumb}"
                        alt= "Food"
                      />
                    </div>
                <div class="card-content">
                    <p class="time">10 Minutes</p>
                    <p class="title is-size-5">${meal.strMeal}</p>
                </div>
                  <button class="recipe-view-btn" id="view-btn>
                      <p>
                      <a href="" class="has-text-grey">View</a>
                      </p>
                  </button>
                </div>`;
        });
        recipeList.classList.remove("notFound");
      } else {
        html = "Sorry, we didn't find and recipes for you 🥲";
        recipeList.classList.add("notFound");
      }

      recipeList.innerHTML = html;
    });
}

// Get the actual recipe
//function getMealRecipe(e) {
//e.preventDefault();
//if (e.target.classList.contains("recipe-view-btn")) {
//    let mealItem = e.target.parentElement;
//    fetch(
//      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`
//    );
//    then((response) => response.json());
//    then((data =>mealRecipeModal(data.meals));
//  }
//}

// Create Recipe Modal
//function mealRecipeModal(meal){
//  console.log(meal)
//  meal = meal[0];
//  let html = `<h2 class = "recipe-title">${meal.strMeal}</h2>
//               <p class = "recipe-category">${meal.strCategory}</p>
//                <div class = "recipe-instruct">
//              <h3>Instructions:</h3>
//              <p> ${meal.strInstructions}</p>
//
//                </div>
//            <div class = "recipe-meal-img">
//            <img src = "${meal.strMealThumb}" alt = "">
//</img>            </div>
//            <div class = "recipe-link">
//            <a href = "${meal.strYoutube}" target = "_blank">Watch Video</a>
//         </div>
//          `;
//  mealDetailsContent.innerHTML = html;
//  mealDetailsContent.parentElement.classList.add('showRecipe');
//}
// Meal DB URL: www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast

function getRecipes() {
  var requestURL =
    "https://api.edamam.com/api/food-database/v2/parser?app_id=a7e34d30&app_key=2b1b11a09e2d52c041b4c2fbde20f9cf&ingr=" +
    query +
    "&nutrition-type-cooking";
  let searchInputText = document.getElementById("search-input").value.trim();
  fetch(requestURL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}
