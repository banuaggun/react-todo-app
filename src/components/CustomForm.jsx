import React from 'react';

import {contentApi} from "../api/ContentApi";

import { PlusIcon } from '@heroicons/react/24/solid'

const CustomForm = ({ addTodo, setAddTodo, newTodo, setNewTodo }) => {

  const handleFormSubmit = async (e) => {
    if (addTodo.length < 3) {
      alert("Please enter at least 3 characters");
    } else {
      setAddTodo("");
      await contentApi(addTodo);
      newTodo ? setNewTodo(false) : setNewTodo(true);
    }
  }

  return (
    <form className="todo" onSubmit={handleFormSubmit}>

      <div className="wrapper">
        <input type="text" id="todo" className="input" value={addTodo} onInput={(e) => setAddTodo(e.target.value)} required autoFocus maxLength={60} placeholder="Enter Todo" />
        <label htmlFor="todo" className="label">Enter Todo</label>
      </div>

      <button className="btn" aria-label="Add Todo" type="submit">
        <PlusIcon />
      </button>
      
    </form>
  )
}
export default CustomForm