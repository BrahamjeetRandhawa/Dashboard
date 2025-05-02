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

        <h3>Revenue</h3>

        {data.map((item, index) => (
        <div className="Box" key={item.id}>
          <div className="Circle"
          style={{background: `conic-gradient(#00bfff ${item.percentage * 3.6}deg, #eee 0deg)`,
        }}>
            <h4>{item.percentage}</h4>
          </div>
          <p>{item.label}</p>
        </div>
        
        ))}


        <span className="line"></span>

        <h3>Gross Margin $</h3>

        {data.map((item, index) => (
        <div className="Box" key={data.id}>
          <div className="Circle"
          style={{background: `conic-gradient(#00bfff ${item.percentage * 3.6}deg, #eee 0deg)`,
        }}>
            <h4>{item.percentage}</h4>
          </div>
          <p>{item.label}</p>
        </div>
        ))}


        
        <span className="line"></span>

        <h3>Gross Margin %</h3>

        {data.map((item, index) => (
        <div className="Box" key={data.id}>
          <div className="Circle"
          style={{background: `conic-gradient(#00bfff ${item.percentage * 3.6}deg, #eee 0deg)`,
        }}>
            <h4>{item.percentage}%</h4>
          </div>
          <p>{item.label}</p>
          </div>
        ))}

    </div>
  );
}

export default Main;
