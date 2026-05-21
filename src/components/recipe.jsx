import Markdown from 'react-markdown'
import './recipe.css'


export default function AiRecipe(props){
    return (
      <section className="ai-recipe" aria-live='polite'>
        <h2>Recipe Suggested by Chef Claude :</h2>
        <Markdown>{props.recipe}</Markdown>
      </section>
    );
}