
import "./Mainstyle3.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

import TypingHeading from "./textAnimation";

function Main3() {

  const [fulfilmentView, setFulfilmentView] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5500/api/data")
  .then(res => setFulfilmentView(res.data.fulfilmentView))
  .catch(err => console.error(err));
  },[]);

  const data = fulfilmentView


  return (
    <div className="Main-style3">
        <div className="Main-title3">
            <h2>Fulfilment View <TypingHeading text={fulfilmentView[0]?.heading || ""} speed={75} /></h2>
            <p>Source: Demand Tracker</p>
        </div>

        <div className="Main2-grid">
        {data.map((item) => {
          const color = (percentage) => {
          if (percentage >= 100) return "#00cc66";
          if (percentage >= 95) return "#ffcc00";
          return "#ff0000";
        };

         return (
          
        <div className={`Box3 Box3-id-${item.id}`} key={item.id}>
          
          <div className="Circle3"
          style={{
            "--color": color(item.percentage),
            "--target-percentage": `${item.percentage * 3.6}deg`
        }}>
            <h4>{item.percentage}</h4>
          </div>
          <div className="Text-container3">
          <h3 className="Main3-h3">{item.title}</h3>
          <p className="Label3">{item.label}</p>
          </div>
        </div>

      );
})}
        </div>
    </div>
  );
}
        

export default Main3;