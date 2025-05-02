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
          <React.Fragment key={item.id}>
        <div className="Box">
          <div className="Circle"
          style={{background: `conic-gradient(#00bfff ${item.percentage * 3.6}deg, #eee 0deg)`,
        }}>
            <h4>{item.percentage}</h4>
          </div>
          <p>{item.label}</p>
        </div>

        {(index + 1) % 3 === 0 && <span className="line"></span>}
        </React.Fragment>
        ))}
    </div>
  );
}
        

export default Main;
