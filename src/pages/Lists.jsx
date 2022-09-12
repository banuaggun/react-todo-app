import {useState, useEffect} from 'react'
import {getApi} from '../api/GetApi'
import {putApi} from "../api/PutApi";

import CustomForm from '../components/CustomForm'
import TaskList from '../components/TaskList'
import EditForm from '../components/EditForm'

function Lists() {
  const [todos, setTodos] = useState([]);
  const [addTodo, setAddTodo] = useState("");
  const [editContent, setEditContent] = useState(false);
  const [previousFocusEl, setPreviousFocusEl] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const todoList = async () => {
    const result = await getApi();
    setTodos(result);
  };

  const toggleTodo = async (e, content, id, index) => {
    const filteredTodo = todos.filter((i) => i.id === content.id);
    if (e.target.checked) {
      filteredTodo[0].isCompleted = true;
    } else {
      filteredTodo[0].isCompleted = false;
    }
    await putApi(filteredTodo[0]);

  };

  const closeEditMode = (e) => {
    setIsEditing(false);
    previousFocusEl.focus();
  };

  const updateTodo = async (todo) => {
    if (todo.content.length < 3) {
      alert("Please enter at least 3 characters");
    } else{
      setEditContent(false);
      await putApi(todo);

    }

    closeEditMode();
    
  }



  const enterEditMode = (todo) => {
    setEditContent(todo);
    setIsEditing(true);
    setPreviousFocusEl(document.activeElement);
  }

  
  useEffect(() => {
    todoList();
  }, [addTodo, editContent]);
  return (
    <div className='container' style={{marginTop:'-2rem'}}>
      <header>
        <h1>Todo List App</h1>
      </header>
      {
        isEditing && (
          <EditForm
            editContent={editContent}
            updateTodo={updateTodo}
            closeEditMode={closeEditMode}
          />
        )
      }
      <CustomForm addTodo={addTodo} setAddTodo={setAddTodo} />
      {todos && (
        <TaskList todos={todos} toggleTodo={toggleTodo} enterEditMode={enterEditMode} />
      )}
    </div>
  )
}

export default Lists