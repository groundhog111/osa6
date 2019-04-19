import React from 'react';
import {connect} from 'react-redux'
import {addAnecdote} from '../reducers/anecdoteReducer'
import {setNotification} from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {

  const addAnecdoteHandler = async (event) => {
    event.preventDefault()

    props.addAnecdote(event.target.anecdote.value)
    event.target.anecdote.value = ''
    
    props.setNotification("You created new anecdote! Great!", 2)
    
  }
  return (
    <div>
      <form onSubmit = {addAnecdoteHandler}>
        <input name = "anecdote" />
        <button type = "submit" >create</button>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    anecdote: state.anecdote,
    filter: state.filter,
  }
}

const mapDispatchToProps = {
  addAnecdote,
  setNotification
}

const ConnectedNotes = connect(
  mapStateToProps,
  mapDispatchToProps
  )(AnecdoteForm)

export default ConnectedNotes