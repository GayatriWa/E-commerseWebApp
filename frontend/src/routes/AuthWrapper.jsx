import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const AuthWrapper = (props) => {
    const {user} = useSelector(state => state.userReducer)

  return (
    user ? props.children : <Navigate to="/login" />
  )
}

export default AuthWrapper