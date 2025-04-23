import './App.css';
import React from 'react';

import Top from './Top'; // Import the Top component
import Sidebar from './Sidebar'; // Import the Sidebar component
import Filter from './Filter'; // Import the Filter component

function App() {
  return (
    <div className="App-container">
      <Top className="Topbar" />
      <Filter className="Filter" />
      <Sidebar className="Sidebar" />
    </div>
  );
}

export default App;
