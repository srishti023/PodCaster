import React from 'react'
import { useSelector } from 'react-redux';
import ErrorPage from './errorPage';

const profile = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <div>
      {isLoggedIn ? "Profile" : <ErrorPage/>}
    </div>
  )
}

export default profile

