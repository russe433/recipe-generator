var queryIngredient = "tomato"





function getIngredients(query) {
    // Replace `octocat` with anyone else's GitHub username
    var requestUrl = 'https://api.edamam.com/api/food-database/v2/parser?app_id=a7e34d30&app_key=%202b1b11a09e2d52c041b4c2fbde20f9cf&ingr='+query+'&nutrition-type=cooking';
  
    fetch(requestUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data)
      });
  }
  
function getRecipe(query) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
            'X-RapidAPI-Key': '2a2039aab0msh3bb2be665843e7ep1d574bjsnf678438cb873'
        }
    };
    
    fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&q='+query, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}
getRecipe(queryIngredient);


  //getIngredients(queryIngredient);