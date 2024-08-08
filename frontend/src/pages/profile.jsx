import React from 'react'
import { useSelector } from 'react-redux';
import ErrorPage from './errorPage';
import Header from '../components/Profile/header';
import YourPodcasts from '../components/Profile/YourPodcasts';

const profile = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <div>
      {isLoggedIn ? (
        <>
          <Header/>
          <YourPodcasts/>
        </>
      ) : (
      <ErrorPage/>
      )}
    </div>
  )
}

export default profile

