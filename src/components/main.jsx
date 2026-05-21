import "./main.css";

export default function Main() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    console.log(newIngredient);
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
    </main>
  );
}
