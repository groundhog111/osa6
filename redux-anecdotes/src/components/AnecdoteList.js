import React from 'react';
import {connect} from 'react-redux'
import {voteAnecdote} from '../reducers/anecdoteReducer'
import {notificationChange} from '../reducers/notificationReducer'

const AnecdoteList = (props) => {

  const anecdotes = props.anecdote
  
  const vote = (id) => {
    props.voteAnecdote(id)
    const message = `YOU VOTED FOR: ${anecdotes.find(n => id === n.id).content} moi`
    props.notificationChange(message)
    setTimeout(() => props.notificationChange(""),5000)
  }

  const anecdoteMap = () => {
    return anecdotes
      .map(anecdote => <div key={anecdote.id}>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={() => vote(anecdote.id)}>vote</button>
        </div>
      </div>);
  };

  return (
    <div> 
      {anecdoteMap()}
    </div>
  )
}

const anecdotesToShow = ({anecdote, filter}) => {
  return anecdote
    .sort((a, b) => b.votes - a.votes)
    .filter(n => n.content.toLowerCase().includes(filter.toLowerCase()))
}

const mapStateToProps = (state) => {
  return {
    anecdote: anecdotesToShow(state)
  }
}

const mapDispatchToProps = {
  voteAnecdote,
  notificationChange
}

const ConnectedNotes = connect(
  mapStateToProps,
  mapDispatchToProps
  )(AnecdoteList)

export default ConnectedNotes
