import './App.css';
import './Animation.css';

import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios'; // Import axios for making HTTP requests

import Top from './Top'; // Import the Top component
import Sidebar from './Sidebar'; // Import the Sidebar component
import Filter from './Filter'; // Import the Filter component

import Main from './Main'; // Import the Main component
import Main2 from './Main2'; // Import the Main2 component
import Main3 from './Main3'; // Import the Main3 component
import Main4 from './Main4'; // Import the Main4 component
import Main5 from './Main5'; // Import the Main5 component
import Main6 from './Main6'; // Import the Main6 component
import Main7 from './Main7'; // Import the Main7 component
import Main8 from './Main8'; // Import the Main8 component
import Main9 from './Main9'; // Import the Main9 component
import Main10 from './Main10'; // Import the Main10 component
import Main11 from './Main11'; // Import the Main11 component
import Main12 from './Main12'; // Import the Main12 component
import Main13 from './Main13'; // Import the Main13 component
import Main14 from './Main14'; // Import the Main14 component
import Main15 from './Main15'; // Import the Main15 component

function App() {

  const [financials, setFinancials] = useState([]);
  const [filteredFinancials, setFilteredFinancials] = useState([]);
  
    const [filters, setFilters] = useState({
      PERIOD: "2020",
      YEAR: "2020-2021",
      CLUSTER: "UKISA",
      "ACCOUNT NAME": "Finastra",
      LOCATION: "Offshore",
    });
  
    const [options, setOptions] = useState({
      PERIOD: [],
      YEAR: [],
      CLUSTER: [],
      "ACCOUNT NAME": [],
      LOCATION: [],
    });
  
    useEffect(() => {
      axios.get("http://localhost:5500/api/data")
    .then(res => {
      const data = res.data.financials;
      setFinancials(data);
      setFilteredFinancials(data.slice(0, 9));
  
      const newOptions = {
        PERIOD: [...new Set(data.map((d) => d.PERIOD).filter(val => val && val !== "PERIOD"))],
        YEAR: [...new Set(data.map((d) => d.YEAR).filter(val => val && val !== "YEAR"))],
        CLUSTER: [...new Set(data.map((d) => d.CLUSTER).filter(val => val && val !== "CLUSTER"))],
        "ACCOUNT NAME": [...new Set(data.map((d) => d["ACCOUNT NAME"]).filter(val => val && val !== "ACCOUNT NAME"))],
        LOCATION: [...new Set(data.map((d) => d.LOCATION).filter(val => val && val !== "LOCATION"))],
      };
      setOptions(newOptions);
    })
    .catch(err => console.error(err));
    },[]);


    const applyFilters = () => {
      const noFiltersSelected = Object.values(filters).every(val => !val);

      if (noFiltersSelected) {
        setFilteredFinancials(financials.slice(0, 9));
      } else {
        const filtered = financials.filter(item =>
          Object.entries(filters).every(([key, val]) =>
          !val || String(item[key]).trim() === String(val).trim()
      )
        );
        setFilteredFinancials(filtered);
      }
    };

  return (
      <div className="App-body">
        <header>
          <Top className="Topbar" />
        </header>
        <main className="Main">
        <div className="Main-dashboard">
          <Filter className="Filter" 
          filters={filters}
          setFilters={setFilters}
          options={options}
          onFilterApply={applyFilters}/>
          <Sidebar className="Sidebar" />

          <div className="Main-content">
            <Routes>
              <Route path="/" element={<Main financials={filteredFinancials} />} /> 
              <Route path="/demand" element={<Main2 />} /> 
              <Route path="/fulfilment" element={<Main3 />} /> 
              <Route path="/client_partner" element={<Main4 />} /> 
              <Route path="/thought_Leadership" element={<Main5 />} />
              <Route path="/north_Star" element={<Main6 />} />
              <Route path="/GTM_Improvement" element={<Main7 />} />
              <Route path="/operations_Customer" element={<Main8 />} />
              <Route path="/operations_Hcltech" element={<Main9 />} />
              <Route path="/customer_Delight" element={<Main10 />} />
              <Route path="/dex" element={<Main11 />} />
              <Route path="/engineer_Delight" element={<Main12 />} />
              <Route path="/engineer_Upskilling" element={<Main13 />} />
              <Route path="/governance_Customer" element={<Main14 />} />
              <Route path="/governance_Internal" element={<Main15 />} /> 
              <Route path="*" element={<div>Page Not Found</div>} /> {/* Fallback route for unmatched paths */}
            </Routes>
          </div>
        </div>
        
        </main>
      </div>
  );
}

export default App;
