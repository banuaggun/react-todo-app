import { useState, useEffect } from 'react';

import { CheckIcon } from '@heroicons/react/24/solid'

const EditForm = ({ editContent, updateTodo, closeEditMode }) => {
  const [updatedTodoName, setUpdatedTodoName] = useState(editContent.content);

  useEffect(()=> {
    const closeModalIfEscaped = (e) => {
      e.key === "Escape" && closeEditMode();
    }
    window.addEventListener('keydown', closeModalIfEscaped)
    return () => {
      window.removeEventListener('keydown', closeModalIfEscaped)
    }
  }, [closeEditMode])

  const handleFormSubmit = (e) => {
    updateTodo({...editContent, content: updatedTodoName})
  }

  return (
    <div role="dialog" aria-labelledby="editTodo" onClick={(e) => {e.target === e.currentTarget && closeEditMode()}}>
      
      <form className="todo" onSubmit={handleFormSubmit}>
        
        <div className="wrapper">
          
          <input type="text" id="editTodo" className="input" value={updatedTodoName} onInput={(e) => setUpdatedTodoName(e.target.value)} required autoFocus maxLength={60} placeholder="Update Todo" />
          <label htmlFor="editTodo" className="label">Update Todo</label>
        
        </div>
        
        <button className="btn" aria-label={`Confirm edited todo to now read ${updatedTodoName}`} type="submit">
          <CheckIcon strokeWidth={2} height={24} width={24} />
        </button>

      </form>
      
    </div>
  )
}
export default EditForm