import "./Mainstyle.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

function Main() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/data")
  .then(res => setData(res.data))
  .catch(err => console.error(err));
  },[]);


  return (
    <div className="Main-style">
        <div className="Main-title">
            <h2>FINANCIALS</h2>
            <p>Source: PP</p>
        </div>
      <div className="Boxes">
        {data.map((item, index) => (
        <div className="Box" key={item.id}>
          <div className="Circle"
          style={{background: `conic-gradient(#00bfff ${item.percentage * 3.6}deg, #eee 0deg)`,
        }}>
            <h4>{item.percentage}{index == 2 ? '%' : ''}</h4>
          </div>
          <p>{item.label}</p>
        </div>
        ))}

        <span className="line"></span>

        <div className="Box">
          <div className="Circle">
            <h4>28</h4>
          </div>
          <p>Budget</p>
        </div>
        <div className="Box">
          <div className="Circle">
            <h4>28</h4>
          </div>
          <p>Actuals</p>
        </div>
        <div className="Box">
          <div className="Circle">
            <h4>108</h4>
          </div>
          <p>Achieved percentage</p>
        </div>
        
        <span className="line"></span>

        <div className="Box">
          <div className="Circle">
            <h4>26%</h4>
          </div>
          <p>Budget</p>
          </div>
        <div className="Box">
          <div className="Circle">
            <h4>28%</h4>
          </div>
          <p>Actuals</p>
          </div>
        <div className="Box">
          <div className="Circle">
            <h4>108%</h4>
          </div>
          <p>Achieved percentage</p>
          </div>
      </div>
    </div>
  );
}

export default Main;
