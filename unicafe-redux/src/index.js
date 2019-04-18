import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {
  const review = (param) => {
    store.dispatch({
      type: param
    })
  }

  return (
    <div>
      <button onClick={() => review("GOOD")}>hyvä</button> 
      <button onClick={() => review("OK")}>neutraali</button> 
      <button onClick={() => review("BAD")}>huono</button>
      <button onClick={() => review("ZERO")}>nollaa tilastot</button>
      <div>hyvä {store.getState().good}</div>
      <div>neutraali {store.getState().ok}</div>
      <div>huono {store.getState().bad}</div>
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)
