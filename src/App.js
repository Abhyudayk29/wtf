import React from 'react';

import { About, Header, Skills, Work } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => (
  <div className="app">
    <Navbar />
    <div className="section"><Header /></div>
    <div className="section"><About /></div>
    <div className="section"><Work /></div>
    <div className="section"><Skills /></div>
  </div>
);

export default App;
