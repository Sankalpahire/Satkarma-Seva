import React from 'react';
import Header from '../Navbar/Nav';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main style={{marginBottom: '30px'}}>{children}</main> 
      <Footer />
    </div>
  );
};

export default Layout;
