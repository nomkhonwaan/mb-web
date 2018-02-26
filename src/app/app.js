/**
 * External Dependencies
 */
import * as React from 'react';

/** 
 * Internal Dependencies
 */
import Header from './header';
import Footer from './footer';
import Sidebar from './sidebar';

const App = () => {
  return (
    <div className="app">

      <Header />

      <Sidebar />

      <Footer />

    </div>
  );
};

export default App;
