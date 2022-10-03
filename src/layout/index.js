import React from 'react';
import Header from '../components/header';
import SwipeLeft from '../components/swipe-left';
import GhostsButton from '../components/ghosts-button';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <GhostsButton/>
      <SwipeLeft />
    </>
  );
};

export default Layout;
