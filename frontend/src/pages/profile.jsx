import React from 'react'
import { useSelector } from 'react-redux';
import ErrorPage from './errorPage';
import Header from '../components/Profile/header';

const profile = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <div>
      {isLoggedIn ? (
        <>
          <Header/>
        </>
      ) : (
      <ErrorPage/>
      )}
    </div>
  )
}

export default profile

