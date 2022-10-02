import React from 'react';
import Header from '../components/header';
import MouseScroll from '../components/mouse-scroll';
import GhostsButton from '../components/ghosts-button';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <GhostsButton/>
      <MouseScroll />
    </>
  );
};

export default Layout;
