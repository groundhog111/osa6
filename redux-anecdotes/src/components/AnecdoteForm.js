import React from 'react';
import {addAnecdote} from '../reducers/anecdoteReducer'

const AnecdoteForm = (props) => {

  const addAnecdoteHandler = (event) => {
    event.preventDefault()
    props.store.dispatch(addAnecdote(event))
    event.target.anecdote.value = ''

  }
  return (
    <div>
      <h2>create new</h2>
      <form onSubmit = {addAnecdoteHandler}>
        <div><input name = "anecdote" /></div>
        <button type = "submit" >create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
