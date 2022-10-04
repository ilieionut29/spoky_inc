import React from 'react';

import Header from '../components/header';
import GhostsButton from '../components/ghosts-button';
import SwipeLeft from '../components/swipe-left';

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
