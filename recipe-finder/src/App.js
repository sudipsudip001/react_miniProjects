import { useState } from "react";
import './App.css';

export default function App(){
  const [displayOn, setDisplayOn] = useState(true);// display items or not
  const [search, setSearch] = useState(''); // store search value
  const [display, setDisplay] = useState({}); // display after searching
  const [showSearch, setShowSearch] = useState(true); //used to show/hide the search items
  const [nextId, setNextId] = useState(3); // assigns value to next id
  const [editingRecipe, setEditingRecipe] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [newRecipe, setNewRecipe] = useState({
    name: '',
    ingredients: '',
    steps: ''
  });
  const [recipes, setRecipes] = useState(
    [
      {
        id: 0,
        name: 'Fried rice',
        ingredients: ['Rice', 'Oil', 'Egg', 'Peas'],
        steps: [
          'Heat the oil and add onion.',
          'Add rice and stir.',
          'Add eggs and peas and serve.'
        ]
      },
      {
        id: 1,
        name: 'Cappucino',
        ingredients: ['Milk', 'Coffee powder', 'Sugar'],
        steps: [
          'Boil milk and add sugar to it.',
          'Add coffee powder slowly and stir it.',
          'Serve after 5 minutes of adding and stirring.',
        ]
      },
      {
        id: 2,
        name: 'French fries',
        ingredients: ['Potato', 'Spices', 'Oil', 'Sour cream'],
        steps: [
          'Cut potato in small pieces and mix it with spices.',
          'Heat oil to 200 degree Celcius and add potato.',
          'Keep heating till crispy and serve it with sour cream.',
        ]
      },
    ]
  );

  const showSearchItem = () =>{
    if(search === ''){
      alert('Please enter item to search');
      return;
    }
    recipes.forEach(recipe=>{
      if(recipe.name.toLowerCase().includes(search.toLowerCase())){
        setDisplay(recipe);
        return;
      }
    })
    const foundRecipe = recipes.find(recipe=>
      recipe.name.toLowerCase().includes(search.toLowerCase())
    );
    if(foundRecipe){
      setDisplay(foundRecipe);
    }else{
      setDisplay(null);
    }
  }

  const handleAddRecipe = (e) => {
    e.preventDefault();
    if (!newRecipe.name || !newRecipe.ingredients || !newRecipe.steps) {
      alert("Please fill in all fields");
      return;
    }
    const recipeToAdd = {
      id: nextId,
      name: newRecipe.name,
      ingredients: newRecipe.ingredients.split(',').map(i => i.trim()),
      steps: newRecipe.steps.split('\n').map(s => s.trim())
    };
    setNextId(nextId + 1);
    setRecipes([...recipes, {
      id: recipeToAdd.id,
      name: recipeToAdd.name,
      ingredients: recipeToAdd.ingredients,
      steps: recipeToAdd.steps
    }]);
    setNewRecipe({
      name: '',
      ingredients: '',
      steps: ''
    });
  };

  const deleteItem = (id) =>{
    if(window.confirm("Are you sure you want to delete?")){
      setRecipes(recipes.filter(recipe =>
        recipe.id !== id
      ));
    }
  }

  const handleEditor = (e) => {
    e.preventDefault();
    if (!newRecipe.name || !newRecipe.ingredients || !newRecipe.steps) {
      return;
    }
    const updatedRecipes = recipes.map(recipe => 
      recipe.id === editingRecipe.id ? {
        ...recipe,
        name: newRecipe.name,
        ingredients: newRecipe.ingredients.split(',').map(i => i.trim()),
        steps: newRecipe.steps.split('\n').map(s => s.trim())
      } : recipe
    );
    setRecipes(updatedRecipes);
    setEditingRecipe(null);
    setNewRecipe({
      name: '',
      ingredients: '',
      steps: ''
    });
  }

  const editItem = (id) => {
    setEditingId(id);
  }

  const handleSaveEdit = (id, editedRecipe) => {
    const updatedRecipes = recipes.map(recipe => 
      recipe.id === id ? {...recipe, ...editedRecipe} : recipe
    );
    setRecipes(updatedRecipes);
    setEditingId(null);
  }

  return (
    <>
      <input
        type="text"
        placeholder="Search recipe"
        value={search}
        onChange={(e)=>{setSearch(e.target.value)}}
      />
      <button onClick={showSearchItem}>Search</button>
      <button onClick={() => setShowSearch(!showSearch)}>{showSearch ? 'Hide now': 'Show now'}</button> <br/>
      {showSearch ? (
        <>
          {display !== null ? (
            <>
              <p>Id: {display.id}</p>
              <p>Name: {display.name}</p>
              <ul>
                {display.ingredients && Array.isArray(display.ingredients) 
                  ? display.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))
                  : <p>No ingredients to display</p>
                }
              </ul>
              <ol>
                {display.steps && Array.isArray(display.steps)
                  ? display.steps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))
                : <p>No steps found</p>
                }
              </ol>
            </>
          ) : (
            'No item was found'
          )}
        </>
      ) : ''}
      <br/>
      {/* Add new recipes below */}
      <h2>{editingRecipe ? 'Edit Recipe' : 'Add New Recipe'}</h2>
      <form onSubmit={editingRecipe ? handleEditor : handleAddRecipe}>
        <input
          type="text"
          placeholder="Recipe Name"
          value={newRecipe.name}
          onChange={(e)=>setNewRecipe({...newRecipe, name:e.target.value})}
        /> <br/>
        <textarea
          placeholder="Ingredients(comma-separated)"
          value={newRecipe.ingredients}  
          onChange={(e)=>setNewRecipe({...newRecipe, ingredients: e.target.value})}
        /> <br/>
        <textarea
          placeholder="Steps (one per line)"
          value={newRecipe.steps}
          onChange={(e)=>setNewRecipe({...newRecipe, steps: e.target.value})}
        /> <br/>
        <button type="submit">{editingRecipe ? 'Update Recipe' : 'Add Recipe'}</button>
      </form>

      {/* other functionalities below */}

      <br />
      <button onClick={() => setDisplayOn(!displayOn)}>
        Display is {displayOn ? 'on' : 'off'}
      </button>
      
      {displayOn && recipes.map(recipe => (
      <div className="recipeView" key={recipe.id}>
        {editingId === recipe.id ? (
          <form onSubmit={(e) => {
            e.preventDefault();
            handleSaveEdit(recipe.id, {
              name: e.target.name.value,
              ingredients: e.target.ingredients.value.split(',').map(i => i.trim()),
              steps: e.target.steps.value.split('\n').map(s => s.trim())
            });
          }}>
            <input name="name" defaultValue={recipe.name} />
            <textarea name="ingredients" defaultValue={recipe.ingredients.join(', ')} />
            <textarea name="steps" defaultValue={recipe.steps.join('\n')} />
            <button type="submit">Save</button>
            <button type="button" onClick={() => setEditingId(null)}>Cancel</button>
          </form>
        ) : (
          <>
            <h1>{recipe.name}</h1>
            <button onClick={() => deleteItem(recipe.id)}>Delete</button>
            <button onClick={() => editItem(recipe.id)}>Edit</button>
            <p>Ingredients:</p>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <p>Steps:</p>
            <ol>
              {recipe.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </>
        )}
      </div>
    ))}
    </>
  );
}