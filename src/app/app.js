/**
 * External Dependencies
 */
import * as React from 'react';
import { renderRoutes } from 'react-router-config';

/** 
 * Internal Dependencies
 */
import Header from './header';
import Footer from './footer';
import Sidebar from './sidebar';
import routes from '../routes';

const App = () => {
  return (
    <div className="app">

      <Header />

      <Sidebar />

      { renderRoutes(routes) }

      <Footer />

    </div>
  );
};

export default App;
