import "./main.css";
import React from "react";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);

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
          <IngredientListDisplay ingredientList={ingredientList} />
        </section>
      ) : null}

      {ingredientList.length > 3 ? (
        <section className="get-recipe-card">
          <GetRecipeCard />
        </section>
      ) : null}
    </main>
  );
}

function IngredientListDisplay(ingredientList) {
  return (
    <>
      <h2>Ingredients on hand:</h2>
      <ul>{ingredientList.ingredientList}</ul>
    </>
  );
}

function GetRecipeCard() {
  return (
    <>
      <div>
        <h3>Ready for a recipe?</h3>
        <span>Generate a recipe from your list of ingredients.</span>
      </div>
      <button>Get a recipe</button>
    </>
  );
}
