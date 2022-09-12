import deleteApi from '../api/DeleteApi';
import TaskItem from './TaskItem';

import styles from './TaskList.module.css';

const TaskList = ({ todos, toggleTodo, enterEditMode }) => {

  const deleteTodo = async (todo) => {
    await deleteApi(todo.id);
  }
  
  return (
    <ul className={styles.tasks}>
      {todos.map(todo => (
        <TaskItem key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} enterEditMode={enterEditMode} />
      ))
      }
    </ul>
  )
}
export default TaskList