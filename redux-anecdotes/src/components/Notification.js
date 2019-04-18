import React from 'react';
import {connect} from 'react-redux'

const Notification = (props) => {

  const notification = props.notification

  const style = () => {
    if (notification !== '') return {
      border: 'solid',
      padding: 10,
      borderWidth: 1
    }
    else return {dipslay: 'none'}
  }
  
  return (
    <div style={style()}>
      {notification}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {notification: state.notification}
}

const ConnectedNotes = connect(
  mapStateToProps
  )(Notification)

export default ConnectedNotes
