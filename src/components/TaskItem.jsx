import { useState } from 'react';

import styles from './TaskItem.module.css';

import { CheckIcon  } from '@heroicons/react/24/outline';
import { PencilSquareIcon  } from '@heroicons/react/24/outline';
import { TrashIcon } from '@heroicons/react/24/outline';

const TaskItem = ({ todo, deleteTodo, toggleTodo, enterEditMode }) => {
  const [isChecked, setIsChecked ] = useState(todo.checked);

  const handleCheckboxChange = (e) =>{
    setIsChecked(!isChecked);
    toggleTodo(todo.id);
  }

  return (
    <li className={styles.task}>
      <div className={styles["task-group"]}>
        <input type="checkbox" className={styles.checkbox} checked={isChecked} onChange={handleCheckboxChange} name={todo.name}id={todo.id} />
        <label htmlFor={todo.id} className={styles.label}>
          {todo.content}
          
          <p className={styles.checkmark}>
            <CheckIcon strokeWidth={2} width={24} height={24}/>
          </p>
        </label>
      </div>
      <div className={styles["task-group"]}>
        <button className='btn' aria-label={`Update ${todo.name} Todo`} onClick={() => enterEditMode(todo)}>
          <PencilSquareIcon width={24} height={24} />
        </button>

        <button className={`btn ${styles.delete}`} aria-label={`Delete ${todo.name} Todo`} onClick={() => deleteTodo(todo)}>
          <TrashIcon width={24} height={24} />
        </button>

      </div>
    </li>
  )
}
export default TaskItem