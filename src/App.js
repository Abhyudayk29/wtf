import React from 'react';
import { About, Skills, Work } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div className="app">
    <Navbar />
    <div className="section"><About /></div>
    <div className="section"><Work /></div>
    <div className="section"><Skills /></div>
  </div>
);

export default App;
