import './App.css';
import React from 'react';

import Top from './Top'; // Import the Top component
import Sidebar from './Sidebar'; // Import the Sidebar component
import Filter from './Filter'; // Import the Filter component

function App() {
  return (
      <body className="App-body">
        <header>
          <Top className="Topbar" />
        </header>
        <main className="Main">
        <div className="Main-header">
          <Filter className="Filter" />
          <Sidebar className="Sidebar" />
        </div>
        </main>
      </body>
  );
}

export default App;
