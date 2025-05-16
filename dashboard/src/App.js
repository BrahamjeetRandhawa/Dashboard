import './App.css';
import './Animation.css';

import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Top from './Top'; // Import the Top component
import Sidebar from './Sidebar'; // Import the Sidebar component
import Filter from './Filter'; // Import the Filter component

import Main from './Main'; // Import the Main component
import Main2 from './Main2'; // Import the Main2 component
import Main3 from './Main3'; // Import the Main3 component

function App() {
  
  return (
      <div className="App-body">
        <header>
          <Top className="Topbar" />
        </header>
        <main className="Main">
        <div className="Main-dashboard">
          <Filter className="Filter" />
          <Sidebar className="Sidebar" />

          <div className="Main-content">
            <Routes>
              <Route path="/" element={<Main />} /> {/* Default route */}
              <Route path="/demand" element={<Main2 />} /> {/* Main component route */}
              <Route path="/fulfilment" element={<Main3 />} /> {/* Main2 component route */}
            </Routes>
          </div>
        </div>
        
        </main>
      </div>
  );
}

export default App;
