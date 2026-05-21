import "./main.css";
import React from "react";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([])

  const ingredientList = ingredients.map((ingredient) => {
    return <li key={ingredient}>{ingredient}</li>;
  })

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget)
    const newIngredient = formData.get("ingredient")
    setIngredients(prevIngredientList => [...prevIngredientList, newIngredient])
    event.currentTarget.reset()
  }

  return (
    <main>
      <form className="main-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="eg. Oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>+ Add Ingredient</button>
      </form>
      <section className="ingredient-list">
        {ingredientList.length > 0
          ? IngredientListDisplay(ingredientList)
          : null}
      </section>
    </main>
  );
}

function IngredientListDisplay(ingredientList) {
  return (
    <>
      <h2>Ingredients on hand:</h2>
      <ul>{ingredientList}</ul>
    </>
  );
}
