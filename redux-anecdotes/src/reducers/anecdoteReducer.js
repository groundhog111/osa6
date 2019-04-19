import anecdoteService from '../services/anecdotes'

const anecdoteReducer = (state = [], action) => {

  switch (action.type) {
    case 'VOTE':
      const anecdoteVoted = action.data
      return state.map(anecdote =>
        anecdote.id !== anecdoteVoted.id ? anecdote : anecdoteVoted
      )
    case 'ADD':
        return state.concat(action.data)
    case 'INIT_ANECDOTES':
        return action.data
    default: return state
  }
}

export const addAnecdote = (newAnecdote) => {
  return async dispatch => {
    const anecdote = await anecdoteService.addAnecdote(newAnecdote)
    dispatch({
      type: 'ADD',
      data: anecdote
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

export const voteAnecdote = (anecdoteVoted) => {
  return async dispatch => {
    const anecdote = await anecdoteService.vote(anecdoteVoted)
    dispatch({
      type: 'VOTE',
      data: anecdote
    })
  }
}

export default anecdoteReducer