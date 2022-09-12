import {useState, useEffect} from 'react'
import {getApi} from '../api/GetApi'
import CustomForm from '../components/CustomForm'
import TaskList from '../components/TaskList'

function Lists() {
  const [todos, setTodos] = useState([]);
  const [addTodo, setAddTodo] = useState("");
  const [editContent, setEditContent] = useState(false);

  const todoList = async () => {
    const result = await getApi();
    setTodos(result);
  };

  useEffect(() => {
    todoList();
  }, []);
  return (
    <div className='container' style={{marginTop:'-2rem'}}>
      <header>
        <h1>Todo List App</h1>
      </header>
      <CustomForm addTodo={addTodo} setAddTodo={setAddTodo} />
      {todos && (
        <TaskList todos={todos}
        />
      )}
    </div>
  )
}

export default Lists