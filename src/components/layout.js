import React from 'react';
import Header from './Header';
import './layout.css';
import { GlobalStyle } from './styles/GlobalStyle';

function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
    </>
  );
}

export default Layout;
