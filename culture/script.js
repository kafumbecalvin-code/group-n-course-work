document.addEventListener("DOMContentLoaded", (event) => {

    const recipeButton = document.getElementById("recipe-button");
    const recipeDetails = document.getElementById("recipe-details");

    recipeButton.addEventListener("click", function(){
        if (recipeDetails.style.display === "none") {
            recipeDetails.style.display = "block";
            recipeButton.textContent = "Hide Recipe";
        } else {
            recipeDetails.style.display = "none";
            recipeButton.textContent = "View Recipe (Click Me!)";
        }
    });

});