import React from 'react';
import {connect} from 'react-redux'
import {voteAnecdote} from '../reducers/anecdoteReducer'
import {setNotification} from '../reducers/notificationReducer'

const AnecdoteList = (props) => {

  const anecdotes = props.anecdote
  
  const vote = (anecdote) => {
    props.voteAnecdote(anecdote)

    const message = `YOU VOTED FOR: ${anecdote.content} moi`
    props.setNotification(message, 2)
  }

  const anecdoteMap = () => {
    return anecdotes
      .map(anecdote => <div key={anecdote.id}>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={() => vote(anecdote)}>vote</button>
        </div>
      </div>);
  };

  return (
    <div> 
      {anecdotes === undefined ? "moi" : anecdoteMap()}
    </div>
  )
}

const anecdotesToShow = ({anecdote, filter}) => {
  if (anecdote.length===0) {
    return
  }
  else {
    const sorted = anecdote.sort((a, b) => b.votes - a.votes)
    const palautus = (filter.length > 0) ? sorted.filter(n => n.content.toLowerCase().includes(filter.toLowerCase())) : sorted
    return palautus
  }
}

const mapStateToProps = (state) => {
  return {
    anecdote: anecdotesToShow(state)
  }
}

const mapDispatchToProps = {
  voteAnecdote,
  setNotification
}

const ConnectedNotes = connect(
  mapStateToProps,
  mapDispatchToProps
  )(AnecdoteList)

export default ConnectedNotes
