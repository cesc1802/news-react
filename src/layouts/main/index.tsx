import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';

export const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
