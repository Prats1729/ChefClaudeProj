import "./main.css";
import React from "react";
import IngredientsList from "./ingredients.jsx";
import getRecipeFromAi from "../ai.js";
import AiRecipe from "./recipe.jsx";


export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);

  const [recipe, setRecipe] = React.useState("");

  async function getRecipe() {
    const response = await getRecipeFromAi(ingredients);
    setRecipe(response);
    console.log(response);
  }

  const ingredientList = ingredients.map((ingredient) => {
    return <li key={ingredient}>{ingredient}</li>;
  });

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredientList) => [
      ...prevIngredientList,
      newIngredient,
    ]);
  }

  return (
    <main>
      <form className="main-form" action={addIngredient}>
        <input
          type="text"
          placeholder="eg. Oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>+ Add Ingredient</button>
      </form>

      {ingredientList.length > 0 ? (
        <section className="ingredient-list">
          <IngredientsList ingredientList={ingredientList} />
        </section>
      ) : null}

      {ingredientList.length > 3 ? (
        <section className="get-recipe-card">
          <GetRecipeCard getRecipe={getRecipe} />
        </section>
      ) : null}

      {recipe ? <AiRecipe recipe={recipe} />: null}
    </main>
  );
}

function GetRecipeCard(props) {
  return (
    <>
      <div>
        <h3>Ready for a recipe?</h3>
        <span>Generate a recipe from your list of ingredients.</span>
      </div>
      <button onClick={props.getRecipe}>Get a recipe</button>
    </>
  );
}
