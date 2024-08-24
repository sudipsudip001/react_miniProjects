import { useState, useEffect } from "react";
import './App.css';

let next = 3;
export default function App(){

  const [todos, setTodos] = useState([
    {id: 0, task: 'Create todo application', minute: 0, done: false, editing: false},
    {id: 1, task: 'Final year project', minute: 0, done: false, editing: false},
    {id: 2, task: 'Next application', minute: 0, done: false, editing: false},
  ]);
  const [addTodo, setAddTodo] = useState('');
  const [time, setTime] = useState(new Date());
  const [completed, setCompleted] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);
  const [showBin, setShowBin] = useState(false);
  const [bin, setBin] = useState([]);

  useEffect(()=>{
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  const showTime = time.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});

  const handleChange = (id) => {
    const complete = todos.find(t => t.id === id);
    setCompleted([...completed, complete]);
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const handleAdd = () => {
    if(addTodo.trim() !== ''){
      setTodos([
        ...todos,
        {
          id: next++,
          task: addTodo,
          done: false,
          editing: false
        }
      ]);
      setAddTodo('');
    }
  }

  const handleDelete = (id) =>{
    const todoToDelete = todos.find(todo => todo.id === id);
    if(todoToDelete){
      setBin([...bin, todoToDelete]);
      setTodos(todos.filter(t => t.id !== id));
    }
  }

  const handleEdit = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? {...todo, editing: !todo.editing} : todo
    ));
  }

  const handleEditTodo = (id, newTask) => {
    if(newTask.trim() !== ''){
      setTodos(todos.map(todo =>
        todo.id === id ? {...todo, task: newTask, editing: false} : todo
      ));
    }else{
      setTodos(todos.map(todo =>
        todo.id === id ? {...todo, editing: false} : todo
      ));
    }
  }

  const deletePerm = (id) =>{
    setBin(bin.filter(b => b.id !== id));
  }

  const restore = (id) =>{
    const valRest = bin.find(b => b.id === id);
    setTodos([...todos, valRest]);
    setBin(bin.filter(b => b.id !== id));
  }

  const deleteComp = (id) =>{
    setCompleted(completed.filter(c => c.id !== id));
  }

  const restoreComp = (id) =>{
    const val = completed.find(c => c.id === id);
    setTodos([...todos, val]);
    setCompleted(completed.filter(c => c.id !== id));
  }

  return(
    <>
      <h1>ToDo application</h1>
      Current time: <div className="timer">{showTime}</div><br />
      <button onClick={()=>setShowBin(!showBin)}>{showBin ? 'Recycle Bin': 'See Recycle Bin'}</button> <br /> <br />
      {
        showBin && (
          <>
            {bin.map(b =>
              <div className="binItems" key={b.id}>
                {b.task}
                <button onClick={() => restore(b.id)}>Restore</button>
                <button onClick={() => deletePerm(b.id)}>Delete permanently</button>
                <br /> <br />
              </div>
            )}
          </>
        )
      }
      <button onClick={()=>setShowCompleted(!showCompleted)}>{showCompleted? 'Completed tasks': 'See completed tasks'}</button> <br /> <br />
      {
        showCompleted && (
          <>
            {completed.map(c =>
              <div className="completedItems" key={c.id}>
                {c.task}
                <button onClick={() => restoreComp(c.id)}>Restore</button>
                <button onClick={() => deleteComp(c.id)}>Delete</button>
                <br /> <br />
              </div>
            )}
          </>
        )
      }
      <input
        type="text"
        placeholder="Enter your task"
        value={addTodo}
        onChange={(e) => setAddTodo(e.target.value)}
      />
      <button onClick={handleAdd}>Add todo</button> <br />
      {todos.map(todo =>
        <div className="todoList" key={todo.id}>
          {!todo.done && (
            <>
              <input type="checkbox" checked={todo.done} onChange={() => handleChange(todo.id)} /> 
              {todo.editing ? (
                <>
                  <input 
                    type="text" 
                    defaultValue={todo.task} 
                    onBlur={(e) => handleEditTodo(todo.id, e.target.value)}
                  />
                  <button onClick={() => handleEditTodo(todo.id, todo.task)}>Save</button>
                </>
              ) : todo.task}
              <button onClick={() => handleEdit(todo.id)}>Edit</button>
              <button onClick={()=> handleDelete(todo.id)}>Delete</button>
            </>
          )}
        </div>
      )}
      <p>
        <i>Note:<br /> 1. Click the checkbox to mark completion of task. <br />
            2. Press Edit to edit todo lists. <br />
            3. Press Delete to delete todo items. <br />
            4. Add new Todos by entering texts in textbox and clicking 'Add'.<br /> </i>
      </p>
    </>
  );
}