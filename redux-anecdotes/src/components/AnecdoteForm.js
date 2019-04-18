import React from 'react';
import {connect} from 'react-redux'
import {addAnecdote} from '../reducers/anecdoteReducer'
import {notificationChange} from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {

  const addAnecdoteHandler = (event) => {
    event.preventDefault()
    props.addAnecdote(event)
    event.target.anecdote.value = ''
    props.notificationChange("You created new anecdote! Great!")
    setTimeout(() => props.notificationChange(""),5000)
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
  notificationChange
}

const ConnectedNotes = connect(
  mapStateToProps,
  mapDispatchToProps
  )(AnecdoteForm)

export default ConnectedNotes